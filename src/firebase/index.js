import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseApp = ({
    apiKey: "AIzaSyADKFhIEvek2gBXPyn5rTg7f58kjNymk14",
    authDomain: "summative-2023.firebaseapp.com",
    projectId: "summative-2023",
    storageBucket: "summative-2023.appspot.com",
    messagingSenderId: "957828066785",
    appId: "1:957828066785:web:387ef9d6c840406038b6a0",
    measurementId: "G-6QD497176L"
  });

const app = initializeApp(firebaseApp);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

export { auth, firestore, storage }