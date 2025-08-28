// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOM12PX5IwlQf5MFVvmMK3JjJV3w5hdLk",
  authDomain: "mental-health-test-618f9.firebaseapp.com",
  projectId: "mental-health-test-618f9",
  storageBucket: "mental-health-test-618f9.firebasestorage.app",
  messagingSenderId: "1048688157283",
  appId: "1:1048688157283:web:397d42ea4c838e8f654e56",
  measurementId: "G-SRV3QP9P3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc };