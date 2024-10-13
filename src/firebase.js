import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQL3sgnr8tup-nl_Sm-GnhtN-PD7vK1pk",
    authDomain: "linkedin-clone-e5941.firebaseapp.com",
    projectId: "linkedin-clone-e5941",
    storageBucket: "linkedin-clone-e5941.appspot.com",
    messagingSenderId: "194343916040",
    appId: "1:194343916040:web:514673d933a54a55a0b7bd",
    measurementId: "G-F7NHG7KM81"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }