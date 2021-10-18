// NPM Packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFgl9lomPAEVg0yswaEhZ4ZIDGlOqROkc",
  authDomain: "bbq-fb.firebaseapp.com",
  projectId: "bbq-fb",
  storageBucket: "bbq-fb.appspot.com",
  messagingSenderId: "185366135663",
  appId: "1:185366135663:web:372af8f0d7512db0f35e9a",
};

const firebaseInstance = initializeApp(firebaseConfig);
const firestoreReference = getFirestore(firebaseInstance);
export const cloudStorageReference = getStorage(firebaseInstance);

export default firestoreReference;
