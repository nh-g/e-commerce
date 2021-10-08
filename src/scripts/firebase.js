// NPM Packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfGq7M0B2NxNZLGhdfCi2WTGZacxUFcX8",
  authDomain: "ecommerce-giang.firebaseapp.com",
  projectId: "ecommerce-giang",
  storageBucket: "ecommerce-giang.appspot.com",
  messagingSenderId: "721043646639",
  appId: "1:721043646639:web:603bc36e7f1d593bae0c5a",
};

const firebaseApp = initializeApp(firebaseConfig);


export const database = getFirestore(firebaseApp);

export const authentication = getAuth();
