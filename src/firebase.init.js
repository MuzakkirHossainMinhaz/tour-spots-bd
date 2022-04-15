// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpGepA3Tl1wj23XpBQsuVR5b6FRQ0cMz0",
  authDomain: "tour-spots-bd.firebaseapp.com",
  projectId: "tour-spots-bd",
  storageBucket: "tour-spots-bd.appspot.com",
  messagingSenderId: "893872434113",
  appId: "1:893872434113:web:0483df22cc1f7ca9e91d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;