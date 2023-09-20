// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDCVX8c1oL3qAS9SbXPdNS47Qhgkte7cz0",

  authDomain: "expo-login-1728a.firebaseapp.com",

  projectId: "expo-login-1728a",

  storageBucket: "expo-login-1728a.appspot.com",

  messagingSenderId: "690949499289",

  appId: "1:690949499289:web:917778e8fc684463580b08"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}