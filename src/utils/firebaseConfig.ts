// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvyHiIZmLj0bm0PsVMyPsUjxaS9Y4BF_M",
  authDomain: "flixory-efebc.firebaseapp.com",
  projectId: "flixory-efebc",
  storageBucket: "flixory-efebc.firebasestorage.app",
  messagingSenderId: "613578903014",
  appId: "1:613578903014:web:895be1e3eb9e4cf77ada27",
  measurementId: "G-NDT5NMS82N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export {auth};

