import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { createDefaultAppState, sanitizeAppState } from '../services/appDataService';
import { STORAGE_KEYS } from '../utils/storage';

const APP_COLLECTION = 'appState';
const APP_DOCUMENT = 'main';
const AppDataContext = createContext(null);

const readLegacyAppState = () => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null;
  }

  const parse = (key, fallback) => {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  };

  const legacyGroundTransactions = parse('patoda_ground_fund_transactions', []);
  const legacyContributionPlayers = parse('patoda_contribution_players', []);

  return {
    players: parse(STORAGE_KEYS.players, null),
    teams: parse(STORAGE_KEYS.teams, null),
    captains: parse(STORAGE_KEYS.captains, null),
    matches: parse(STORAGE_KEYS.matches, null),
    stats: parse(STORAGE_KEYS.stats, null),
    fundTransactions: legacyGroundTransactions,
    contributionPlayers: legacyContributionPlayers,
  };
};

export function AppDataProvider({ children }) {
  const [state, setState] = useState(createDefaultAppState());
  const [isReady, setIsReady] = useState(false);
  const latestStateRef = useRef(state);
  const appDocRef = useMemo(() => (isFirebaseConfigured ? doc(db, APP_COLLECTION, APP_DOCUMENT) : null), []);

  useEffect(() => {
    latestStateRef.current = state;
  }, [state]);

  useEffect(() => {
    let unsubscribe = null;
    let cancelled = false;

    const bootstrap = async () => {
      const legacyState = readLegacyAppState();

      if (!isFirebaseConfigured || !appDocRef) {
        const fallbackState = sanitizeAppState(legacyState || createDefaultAppState());
        if (!cancelled) {
          latestStateRef.current = fallbackState;
          setState(fallbackState);
          setIsReady(true);
        }
        return;
      }

      try {
        const snapshot = await getDoc(appDocRef);
        const initialState = snapshot.exists()
          ? sanitizeAppState(snapshot.data())
          : sanitizeAppState(legacyState || createDefaultAppState());

        if (!snapshot.exists()) {
          await setDoc(appDocRef, initialState);
        }

        if (cancelled) {
          return;
        }

        latestStateRef.current = initialState;
        setState(initialState);
        setIsReady(true);

        unsubscribe = onSnapshot(appDocRef, (docSnap) => {
          if (!docSnap.exists()) {
            return;
          }

          const nextState = sanitizeAppState(docSnap.data());
          latestStateRef.current = nextState;
          setState(nextState);
          setIsReady(true);
        });
      } catch (error) {
        console.error('Firebase app state bootstrap failed:', error);
        const fallbackState = sanitizeAppState(legacyState || createDefaultAppState());
        if (!cancelled) {
          latestStateRef.current = fallbackState;
          setState(fallbackState);
          setIsReady(true);
        }
      }
    };

    bootstrap();

    return () => {
      cancelled = true;
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [appDocRef]);

  const updateAppState = useCallback(async (updater) => {
    const currentState = latestStateRef.current;
    const patch = typeof updater === 'function' ? updater(currentState) : updater;
    const nextState = sanitizeAppState({
      ...currentState,
      ...patch,
    });

    latestStateRef.current = nextState;
    setState(nextState);

    if (isFirebaseConfigured && appDocRef) {
      await setDoc(appDocRef, nextState);
    }

    return nextState;
  }, [appDocRef]);

  const resetAppState = useCallback(async () => {
    return updateAppState(createDefaultAppState());
  }, [updateAppState]);

  const value = useMemo(
    () => ({
      ...state,
      isReady,
      updateAppState,
      resetAppState,
    }),
    [state, isReady, updateAppState, resetAppState]
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
