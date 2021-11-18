// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDcO4Yj0JLZzpi8ClD5cibh7HroRCixTXc",
    authDomain: "essentialapp-917d7.firebaseapp.com",
    projectId: "essentialapp-917d7",
    storageBucket: "essentialapp-917d7.appspot.com",
    messagingSenderId: "998113086980",
    appId: "1:998113086980:web:6d433b4d3da1fd21f86f51",
    measurementId: "G-02HCJ7CZPE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const fireAuth = getAuth();
export { app, firestore, fireAuth };