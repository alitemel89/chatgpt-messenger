import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "chatgpt-messenger-b8a56.firebaseapp.com",
  projectId: "chatgpt-messenger-b8a56",
  storageBucket: "chatgpt-messenger-b8a56.appspot.com",
  messagingSenderId: "374200468126",
  appId: "1:374200468126:web:6b8a461741b90d7272b18f",
  measurementId: "G-KMZ2FB8Y5R",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
