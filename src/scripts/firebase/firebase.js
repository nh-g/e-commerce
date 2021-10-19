// NPM Packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQ2tMoRu0_sMjNKEvAktCXCEmpO344ezI",
  authDomain: "ecom-bbq-giang.firebaseapp.com",
  projectId: "ecom-bbq-giang",
  storageBucket: "ecom-bbq-giang.appspot.com",
  messagingSenderId: "884743402329",
  appId: "1:884743402329:web:ecc75f65f224df4de81248",
};

const firebaseInstance = initializeApp(firebaseConfig);
const firestoreReference = getFirestore(firebaseInstance);
export const cloudStorageReference = getStorage(firebaseInstance);

export default firestoreReference;
