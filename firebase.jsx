// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6mFOE6P5tp6FOAcPsOGowZGDCvHkWKJE",
  authDomain: "delete-lab.firebaseapp.com",
  projectId: "delete-lab",
  storageBucket: "delete-lab.appspot.com",
  messagingSenderId: "849674386109",
  appId: "1:849674386109:web:2167163ba89aee75f4d5d4",
  measurementId: "G-5S5JTMQL7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);