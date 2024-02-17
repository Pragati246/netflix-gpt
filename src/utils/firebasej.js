// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACeCaRER6UKSogDe0Olq2-YZrI0UHY0KU",
  authDomain: "netflixgpt-445e2.firebaseapp.com",
  projectId: "netflixgpt-445e2",
  storageBucket: "netflixgpt-445e2.appspot.com",
  messagingSenderId: "445093368406",
  appId: "1:445093368406:web:83425f0343835d3552a1f7",
  measurementId: "G-DXS485RQ51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();