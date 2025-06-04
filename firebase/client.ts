// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSE4_hh4gt9UFc9k4t3JxUc2ogIerQ5rs",
  authDomain: "prepwise-1d494.firebaseapp.com",
  projectId: "prepwise-1d494",
  storageBucket: "prepwise-1d494.firebasestorage.app",
  messagingSenderId: "408222195304",
  appId: "1:408222195304:web:02d1160084b60b857325dd",
  measurementId: "G-15RX2CVQC4",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
