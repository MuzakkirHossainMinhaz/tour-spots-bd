// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

export default app;