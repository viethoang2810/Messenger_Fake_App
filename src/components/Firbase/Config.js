// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5jmlm6Wl00pwN-d733NX1b37kQbhf8rI",
  authDomain: "messenger-fa7e6.firebaseapp.com",
  projectId: "messenger-fa7e6",
  storageBucket: "messenger-fa7e6.appspot.com",
  messagingSenderId: "454742769396",
  appId: "1:454742769396:web:c28f11e5f973d64a3c68a1",
  measurementId: "G-EZ5VKJXK7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);