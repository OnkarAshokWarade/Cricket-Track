import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  deleteField,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../lib/firebase';
import {
  buildStatsFromMatches,
  createDefaultAppState,
  sanitizeAppState,
  sanitizeMatchesData,
  serializeAppStateForFirestore,
  serializeMatchForFirestore,
  stripMatchesFromAppState,
} from '../services/appDataService';

const APP_COLLECTION = 'appState';
const APP_DOCUMENT = 'main';
const MATCHES_COLLECTION = 'matches';
const AppDataContext = createContext(null);

const mergeState = (appState, matches) => ({
  ...appState,
  matches,
  stats: buildStatsFromMatches(matches),
});

const createFirestoreRequiredError = () =>
  new Error('Firebase is not configured. Firestore is required as the shared data source.');

export function AppDataProvider({ children }) {
  const defaultState = useMemo(() => createDefaultAppState(), []);
  const [appState, setAppState] = useState(stripMatchesFromAppState(defaultState));
  const [matches, setMatches] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const latestAppStateRef = useRef(stripMatchesFromAppState(defaultState));
  const latestMatchesRef = useRef([]);
  const hasAppSnapshotRef = useRef(false);
  const hasMatchesSnapshotRef = useRef(false);
  const legacyMatchesRef = useRef([]);
  const hasMigratedLegacyMatchesRef = useRef(false);
  const appDocRef = useMemo(() => (isFirebaseConfigured ? doc(db, APP_COLLECTION, APP_DOCUMENT) : null), []);
  const matchesCollectionRef = useMemo(() => (isFirebaseConfigured ? collection(db, MATCHES_COLLECTION) : null), []);

  const syncReadyState = useCallback(() => {
    if (hasAppSnapshotRef.current && hasMatchesSnapshotRef.current) {
      setIsReady(true);
    }
  }, []);

  const migrateLegacyMatches = useCallback(async () => {
    if (
      !isFirebaseConfigured ||
      !matchesCollectionRef ||
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
          const payload = serializeMatchForFirestore(match);
          if (!payload) {
            return Promise.resolve();
          }

          return setDoc(doc(matchesCollectionRef, match.id), payload);
        })
      );
    } catch (error) {
      hasMigratedLegacyMatchesRef.current = false;
      console.error('Legacy match migration failed:', error);
    }
  }, [matchesCollectionRef]);

  useEffect(() => {
    latestAppStateRef.current = appState;
  }, [appState]);

  useEffect(() => {
    latestMatchesRef.current = matches;
  }, [matches]);

  useEffect(() => {
    if (!isFirebaseConfigured || !appDocRef || !matchesCollectionRef) {
      const nextAppState = stripMatchesFromAppState(createDefaultAppState());
      latestAppStateRef.current = nextAppState;
      latestMatchesRef.current = [];
      setAppState(nextAppState);
      setMatches([]);
      setIsReady(true);
      return undefined;
    }

    setIsReady(false);
    hasAppSnapshotRef.current = false;
    hasMatchesSnapshotRef.current = false;

    const matchesQuery = query(matchesCollectionRef, orderBy('date', 'desc'));

    const unsubscribeAppState = onSnapshot(
      appDocRef,
      async (docSnap) => {
        const rawState = docSnap.exists() ? docSnap.data() : createDefaultAppState();
        const sanitizedState = sanitizeAppState({
          ...rawState,
          matches: [],
        });
        const nextAppState = stripMatchesFromAppState(sanitizedState);

        legacyMatchesRef.current = sanitizeMatchesData(rawState?.matches);
        latestAppStateRef.current = nextAppState;
        setAppState(nextAppState);

        if (!docSnap.exists()) {
          await setDoc(appDocRef, serializeAppStateForFirestore(defaultState));
        } else if (
          Object.prototype.hasOwnProperty.call(rawState, 'matches') ||
          Object.prototype.hasOwnProperty.call(rawState, 'stats')
        ) {
          await setDoc(
            appDocRef,
            {
              ...serializeAppStateForFirestore(nextAppState),
              matches: deleteField(),
              stats: deleteField(),
            },
            { merge: true }
          );
        }

        hasAppSnapshotRef.current = true;
        syncReadyState();
        await migrateLegacyMatches();
      },
      (error) => {
        console.error('Realtime app state sync failed:', error);
        hasAppSnapshotRef.current = true;
        syncReadyState();
      }
    );

    const unsubscribeMatches = onSnapshot(
      matchesQuery,
      async (snapshot) => {
        const data = snapshot.docs.map((docSnapshot) => ({
          id: docSnapshot.id,
          ...docSnapshot.data(),
        }));
        const nextMatches = sanitizeMatchesData(data);

        latestMatchesRef.current = nextMatches;
        setMatches(nextMatches);

        hasMatchesSnapshotRef.current = true;
        syncReadyState();

        if (snapshot.empty) {
          await migrateLegacyMatches();
        }
      },
      (error) => {
        console.error('Realtime matches sync failed:', error);
        hasMatchesSnapshotRef.current = true;
        syncReadyState();
      }
    );

    return () => {
      unsubscribeAppState();
      unsubscribeMatches();
    };
  }, [appDocRef, defaultState, matchesCollectionRef, migrateLegacyMatches, syncReadyState]);

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

      if (!isFirebaseConfigured || !appDocRef) {
        throw createFirestoreRequiredError();
      }

      await setDoc(
        appDocRef,
        {
          ...serializeAppStateForFirestore(nextAppState),
          matches: deleteField(),
          stats: deleteField(),
        },
        { merge: true }
      );

      return mergeState(nextAppState, latestMatchesRef.current);
    },
    [appDocRef]
  );

  const addMatch = useCallback(
    async (match) => {
      if (!isFirebaseConfigured || !matchesCollectionRef) {
        throw createFirestoreRequiredError();
      }

      const payload = serializeMatchForFirestore(match);
      if (!payload) {
        throw new Error('Match payload is invalid.');
      }

      const docRef = await addDoc(matchesCollectionRef, payload);
      return docRef.id;
    },
    [matchesCollectionRef]
  );

  const updateMatch = useCallback(
    async (matchId, updates) => {
      if (!isFirebaseConfigured || !matchesCollectionRef) {
        throw createFirestoreRequiredError();
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

      const payload = serializeMatchForFirestore(nextMatch);
      if (!payload) {
        throw new Error('Match payload is invalid.');
      }

      await updateDoc(doc(matchesCollectionRef, matchId), payload);
    },
    [matchesCollectionRef]
  );

  const resetAppState = useCallback(async () => {
    if (!isFirebaseConfigured || !appDocRef || !matchesCollectionRef) {
      throw createFirestoreRequiredError();
    }

    await Promise.all(latestMatchesRef.current.map((match) => deleteDoc(doc(matchesCollectionRef, match.id))));
    await setDoc(appDocRef, serializeAppStateForFirestore(createDefaultAppState()));
  }, [appDocRef, matchesCollectionRef]);

  const value = useMemo(
    () => ({
      ...mergeState(appState, matches),
      isReady,
      updateAppState,
      addMatch,
      updateMatch,
      resetAppState,
    }),
    [addMatch, appState, isReady, matches, resetAppState, updateAppState, updateMatch]
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
