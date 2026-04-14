import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import {
  onValue,
  orderByChild,
  push,
  query,
  ref,
  remove,
  set,
  update,
} from 'firebase/database';
import { isRealtimeDatabaseConfigured, realtimeDb } from '../lib/firebase';
import {
  buildStatsFromMatches,
  createDefaultAppState,
  sanitizeAppState,
  sanitizeMatchesData,
  serializeAppStateForDatabase,
  serializeMatchForDatabase,
  stripMatchesFromAppState,
} from '../services/appDataService';

const APP_STATE_PATH = 'appState/main';
const MATCHES_PATH = 'matches';
const AppDataContext = createContext(null);
const DATABASE_READY_TIMEOUT_MS = 6000;

const mergeState = (appState, matches) => ({
  ...appState,
  matches,
  stats: buildStatsFromMatches(matches),
});

const createDatabaseRequiredError = () =>
  new Error('Firebase Realtime Database is not configured. Check VITE_FIREBASE_DATABASE_URL.');

export function AppDataProvider({ children }) {
  const defaultState = useMemo(() => createDefaultAppState(), []);
  const [appState, setAppState] = useState(stripMatchesFromAppState(defaultState));
  const [matches, setMatches] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [syncError, setSyncError] = useState('');
  const latestAppStateRef = useRef(stripMatchesFromAppState(defaultState));
  const latestMatchesRef = useRef([]);
  const hasAppSnapshotRef = useRef(false);
  const hasMatchesSnapshotRef = useRef(false);
  const legacyMatchesRef = useRef([]);
  const hasMigratedLegacyMatchesRef = useRef(false);
  const appDataRef = useMemo(
    () => (isRealtimeDatabaseConfigured ? ref(realtimeDb, APP_STATE_PATH) : null),
    []
  );
  const matchesRef = useMemo(
    () => (isRealtimeDatabaseConfigured ? ref(realtimeDb, MATCHES_PATH) : null),
    []
  );

  const syncReadyState = useCallback(() => {
    if (hasAppSnapshotRef.current && hasMatchesSnapshotRef.current) {
      setIsReady(true);
    }
  }, []);

  const migrateLegacyMatches = useCallback(async () => {
    if (
      !isRealtimeDatabaseConfigured ||
      !matchesRef ||
      !hasMatchesSnapshotRef.current ||
      legacyMatchesRef.current.length === 0 ||
      latestMatchesRef.current.length > 0 ||
      hasMigratedLegacyMatchesRef.current
    ) {
      return;
    }

    hasMigratedLegacyMatchesRef.current = true;

    try {
      await Promise.all(
        legacyMatchesRef.current.map((match) => {
          const payload = serializeMatchForDatabase(match);
          if (!payload) {
            return Promise.resolve();
          }

          return set(ref(realtimeDb, `${MATCHES_PATH}/${match.id}`), payload);
        })
      );
    } catch (error) {
      hasMigratedLegacyMatchesRef.current = false;
      console.error('Legacy match migration failed:', error);
    }
  }, [matchesRef]);

  useEffect(() => {
    latestAppStateRef.current = appState;
  }, [appState]);

  useEffect(() => {
    latestMatchesRef.current = matches;
  }, [matches]);

  useEffect(() => {
    if (!isRealtimeDatabaseConfigured || !appDataRef || !matchesRef) {
      const nextAppState = stripMatchesFromAppState(createDefaultAppState());
      latestAppStateRef.current = nextAppState;
      latestMatchesRef.current = [];
      setAppState(nextAppState);
      setMatches([]);
      setSyncError('Firebase Realtime Database is not configured. Admin changes cannot be saved.');
      setIsReady(true);
      return undefined;
    }

    setIsReady(false);
    setSyncError('');
    hasAppSnapshotRef.current = false;
    hasMatchesSnapshotRef.current = false;
    hasMigratedLegacyMatchesRef.current = false;

    const matchesQuery = query(matchesRef, orderByChild('date'));
    const readyTimeoutId = window.setTimeout(() => {
      if (!hasAppSnapshotRef.current || !hasMatchesSnapshotRef.current) {
        setIsReady(true);
        setSyncError('Firebase is taking longer than expected. Showing available data while the database keeps syncing.');
      }
    }, DATABASE_READY_TIMEOUT_MS);

    const unsubscribeAppState = onValue(
      appDataRef,
      async (snapshot) => {
        try {
          const rawState = snapshot.exists() ? snapshot.val() : createDefaultAppState();
          const sanitizedState = sanitizeAppState({
            ...rawState,
            matches: [],
          });
          const nextAppState = stripMatchesFromAppState(sanitizedState);

          legacyMatchesRef.current = sanitizeMatchesData(rawState?.matches);
          latestAppStateRef.current = nextAppState;
          setAppState(nextAppState);
          setSyncError('');

          hasAppSnapshotRef.current = true;
          syncReadyState();

          try {
            if (!snapshot.exists()) {
              await set(appDataRef, serializeAppStateForDatabase(defaultState));
            } else if (
              Object.prototype.hasOwnProperty.call(rawState, 'matches') ||
              Object.prototype.hasOwnProperty.call(rawState, 'stats')
            ) {
              await update(appDataRef, {
                ...serializeAppStateForDatabase(nextAppState),
                matches: null,
                stats: null,
              });
            }
          } catch (writeError) {
            console.error('Realtime app state write failed:', writeError);
            setSyncError('Database data loaded, but Firebase rejected an automatic setup write. Admin changes may need database rules/configuration checked.');
          }

          await migrateLegacyMatches();
        } catch (error) {
          console.error('Realtime app state parsing failed:', error);
          setSyncError('Database data could not be read correctly. Showing the default roster for now.');
          hasAppSnapshotRef.current = true;
          syncReadyState();
        }
      },
      (error) => {
        console.error('Realtime app state sync failed:', error);
        setSyncError('Could not sync app settings from Firebase. Please check the database connection.');
        hasAppSnapshotRef.current = true;
        syncReadyState();
      }
    );

    const unsubscribeMatches = onValue(
      matchesQuery,
      async (snapshot) => {
        try {
          const data = [];
          snapshot.forEach((matchSnapshot) => {
            data.push({
              id: matchSnapshot.key,
              ...matchSnapshot.val(),
            });
          });
          const nextMatches = sanitizeMatchesData(data).sort((a, b) => (a.date < b.date ? 1 : -1));

          latestMatchesRef.current = nextMatches;
          setMatches(nextMatches);
          setSyncError('');

          hasMatchesSnapshotRef.current = true;
          syncReadyState();

          if (!snapshot.exists()) {
            await migrateLegacyMatches();
          }
        } catch (error) {
          console.error('Realtime matches parsing failed:', error);
          setSyncError('Match data could not be read correctly. Showing available match data for now.');
          hasMatchesSnapshotRef.current = true;
          syncReadyState();
        }
      },
      (error) => {
        console.error('Realtime matches sync failed:', error);
        setSyncError('Could not sync matches from Firebase. Please check the database connection.');
        hasMatchesSnapshotRef.current = true;
        syncReadyState();
      }
    );

    return () => {
      window.clearTimeout(readyTimeoutId);
      unsubscribeAppState();
      unsubscribeMatches();
    };
  }, [appDataRef, defaultState, matchesRef, migrateLegacyMatches, syncReadyState]);

  const updateAppState = useCallback(
    async (updater) => {
      const currentState = mergeState(latestAppStateRef.current, latestMatchesRef.current);
      const patch = typeof updater === 'function' ? updater(currentState) : updater;
      const { matches: _ignoredMatches, stats: _ignoredStats, ...restPatch } = patch || {};
      const nextState = sanitizeAppState({
        ...currentState,
        ...restPatch,
        matches: latestMatchesRef.current,
      });
      const nextAppState = stripMatchesFromAppState(nextState);

      if (!isRealtimeDatabaseConfigured || !appDataRef) {
        throw createDatabaseRequiredError();
      }

      await update(appDataRef, {
        ...serializeAppStateForDatabase(nextAppState),
        matches: null,
        stats: null,
      });

      return mergeState(nextAppState, latestMatchesRef.current);
    },
    [appDataRef]
  );

  const addMatch = useCallback(
    async (match) => {
      if (!isRealtimeDatabaseConfigured || !matchesRef) {
        throw createDatabaseRequiredError();
      }

      const payload = serializeMatchForDatabase(match);
      if (!payload) {
        throw new Error('Match payload is invalid.');
      }

      const matchRef = push(matchesRef);
      await set(matchRef, payload);
      return matchRef.key;
    },
    [matchesRef]
  );

  const updateMatch = useCallback(
    async (matchId, updates) => {
      if (!isRealtimeDatabaseConfigured || !matchesRef) {
        throw createDatabaseRequiredError();
      }

      const currentMatch = latestMatchesRef.current.find((match) => match.id === matchId);
      const nextMatch = sanitizeMatchesData([
        {
          ...currentMatch,
          ...updates,
          id: matchId,
        },
      ])[0];

      if (!nextMatch) {
        throw new Error(`Match "${matchId}" was not found.`);
      }

      const payload = serializeMatchForDatabase(nextMatch);
      if (!payload) {
        throw new Error('Match payload is invalid.');
      }

      await update(ref(realtimeDb, `${MATCHES_PATH}/${matchId}`), payload);
    },
    [matchesRef]
  );

  const resetAppState = useCallback(async () => {
    if (!isRealtimeDatabaseConfigured || !appDataRef || !matchesRef) {
      throw createDatabaseRequiredError();
    }

    await Promise.all([
      remove(matchesRef),
      set(appDataRef, serializeAppStateForDatabase(createDefaultAppState())),
    ]);
  }, [appDataRef, matchesRef]);

  const value = useMemo(
    () => ({
      ...mergeState(appState, matches),
      isReady,
      isDatabaseConfigured: isRealtimeDatabaseConfigured,
      syncError,
      updateAppState,
      addMatch,
      updateMatch,
      resetAppState,
    }),
    [addMatch, appState, isReady, matches, resetAppState, syncError, updateAppState, updateMatch]
  );

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
}

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppData must be used inside AppDataProvider');
  }
  return context;
};
