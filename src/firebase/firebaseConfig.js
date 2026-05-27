// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
;

import {
  getAuth,
} from "firebase/auth";

import {
  getFirestore,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8TRQt2BQTJmbZ2XNrh02C1QOmwNpacyo",
  authDomain: "task-maneger-f1ec5.firebaseapp.com",
  projectId: "task-maneger-f1ec5",
  storageBucket: "task-maneger-f1ec5.firebasestorage.app",
  messagingSenderId: "442014727065",
  appId: "1:442014727065:web:7d79bf200b72516bc83108",
  measurementId: "G-GPL2T9C9GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =
  getAuth(app);

// Firestore Database
export const db =
  getFirestore(app);