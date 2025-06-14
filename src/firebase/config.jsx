// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKR-JTzAld6cf_YyZ_EYRngZzIAsa9P3w",
  authDomain: "medisafe-emergency.firebaseapp.com",
  projectId: "medisafe-emergency",
  storageBucket: "medisafe-emergency.firebasestorage.app",
  messagingSenderId: "1026263752935",
  appId: "1:1026263752935:web:8173f237e537eb98738242",
  measurementId: "G-QNMQG22GW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);