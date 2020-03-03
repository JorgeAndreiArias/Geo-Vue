import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp   = firebase.initializeApp({
    apiKey: "AIzaSyBph1eNt1PZaAkJs9XXLjqSiJUkXZmD8X8",
    authDomain: "project-66978.firebaseapp.com",
    databaseURL: "https://project-66978.firebaseio.com",
    projectId: "project-66978",
    storageBucket: "project-66978.appspot.com",
    messagingSenderId: "36034094216",
    appId: "1:36034094216:web:950f5d4e2b0c550eed6b3d"
});

export const db = firebaseApp.firestore();