import { getApps, initializeApp } from "firebase/app";
import { Auth, getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
const getFirebaseApp = () => getApps()[0] || initializeApp(config);

const firebaseApp = getFirebaseApp();

export const firestore = getFirestore(firebaseApp);
export const fireStorage = getStorage(firebaseApp);
export const fireAuth: Auth = getAuth(firebaseApp);
export const getToken = () => fireAuth.currentUser?.getIdToken();
