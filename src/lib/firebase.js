import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const publicFirebaseConfig = {
  apiKey: 'AIzaSyBBRzpkT-9DH4F7cGyofjJrbt2DlPNjC0s',
  authDomain: 'patoda-xi-live.firebaseapp.com',
  projectId: 'patoda-xi-live',
  storageBucket: 'patoda-xi-live.firebasestorage.app',
  messagingSenderId: '633983796288',
  appId: '1:633983796288:web:ca7f0ce3a1932509a48ba5',
  measurementId: 'G-T52BLFZYXT',
  databaseURL: 'https://patoda-xi-live-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const readEnv = (key, fallback = '') => {
  const value = import.meta.env[key];
  return String(value || fallback).trim();
};

const firebaseConfig = {
  apiKey: readEnv('VITE_FIREBASE_API_KEY', publicFirebaseConfig.apiKey),
  authDomain: readEnv('VITE_FIREBASE_AUTH_DOMAIN', publicFirebaseConfig.authDomain),
  projectId: readEnv('VITE_FIREBASE_PROJECT_ID', publicFirebaseConfig.projectId),
  storageBucket: readEnv('VITE_FIREBASE_STORAGE_BUCKET', publicFirebaseConfig.storageBucket),
  messagingSenderId: readEnv('VITE_FIREBASE_MESSAGING_SENDER_ID', publicFirebaseConfig.messagingSenderId),
  appId: readEnv('VITE_FIREBASE_APP_ID', publicFirebaseConfig.appId),
  measurementId: readEnv('VITE_FIREBASE_MEASUREMENT_ID', publicFirebaseConfig.measurementId),
  databaseURL: readEnv('VITE_FIREBASE_DATABASE_URL', publicFirebaseConfig.databaseURL),
};

let app = null;
let realtimeDb = null;
let auth = null;
let isRealtimeDatabaseConfigured = false;

const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);

if (isFirebaseConfigured) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);

  if (firebaseConfig.databaseURL) {
    realtimeDb = getDatabase(app);
    isRealtimeDatabaseConfigured = true;
  }
}

export { app, realtimeDb, auth, isFirebaseConfigured, isRealtimeDatabaseConfigured };

