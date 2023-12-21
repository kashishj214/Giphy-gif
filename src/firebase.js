// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhoEusRJ22Hxaxyyd7rqfKg3DeEjVInug",
  authDomain: "giphy-project-55.firebaseapp.com",
  projectId: "giphy-project-55",
  storageBucket: "giphy-project-55.appspot.com",
  messagingSenderId: "695984024533",
  appId: "1:695984024533:web:865b458293d9e8cbcdab5c",
  measurementId: "G-RH3TQM6SZV"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// export default {app, auth};

export default firebase;
