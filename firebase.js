// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVicCdOCIDsnbLhwGrdDR4VhXewmDd-jE",
  authDomain: "insta2-3aab4.firebaseapp.com",
  projectId: "insta2-3aab4",
  storageBucket: "insta2-3aab4.appspot.com",
  messagingSenderId: "836533570613",
  appId: "1:836533570613:web:ced81f9c5b6ab8a820f57c",
  measurementId: "G-JK12STKD5F"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { app, db, storage }