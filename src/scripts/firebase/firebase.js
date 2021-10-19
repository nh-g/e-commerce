// NPM Packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1BqlNPYWwJmC7LeMpwKfcmHnGy5GyOvc",
  authDomain: "bbq-ecom.firebaseapp.com",
  projectId: "bbq-ecom",
  storageBucket: "bbq-ecom.appspot.com",
  messagingSenderId: "196374467537",
  appId: "1:196374467537:web:e07ecee8d03b3cfc1846f0",
};

const firebaseInstance = initializeApp(firebaseConfig);
const firestoreReference = getFirestore(firebaseInstance);
export const cloudStorageReference = getStorage(firebaseInstance);

export default firestoreReference;
