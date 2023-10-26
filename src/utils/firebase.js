// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiR6c4WMa38sXe7BvMkFgE6Pm3Glvwf38",
  authDomain: "netflix-gpt-98272.firebaseapp.com",
  projectId: "netflix-gpt-98272",
  storageBucket: "netflix-gpt-98272.appspot.com",
  messagingSenderId: "663954637931",
  appId: "1:663954637931:web:67e823aa24d18e53cadd2e",
  measurementId: "G-ZLK8PLD4F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);