import { firebase } from "@firebase/app";
import "@firebase/firestore";

var serviceAccount = require("../keys/serviceAccountKey.json");

const firebaseApp   = firebase.initializeApp({
    apiKey: serviceAccount.apiKey,
    authDomain: serviceAccount.authDomain,
    databaseURL: serviceAccount.databaseURL,
    projectId: serviceAccount.projectId,
    storageBucket: serviceAccount.storageBucket,
    messagingSenderId: serviceAccount.messagingSenderId,
    appId: serviceAccount.appId
});

export const db = firebaseApp.firestore();