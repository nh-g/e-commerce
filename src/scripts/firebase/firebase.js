// NPM Packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCd9yH3Iyhb_sTSC2pTBQVHBZzqKWZHjTI",
  authDomain: "ecom-admin-giang.firebaseapp.com",
  projectId: "ecom-admin-giang",
  storageBucket: "ecom-admin-giang.appspot.com",
  messagingSenderId: "926714992601",
  appId: "1:926714992601:web:20589a2ef1617b4029ebc8",
};

const firebaseInstance = initializeApp(firebaseConfig);
const firestoreReference = getFirestore(firebaseInstance);
export const cloudStorageReference = getStorage(firebaseInstance);

export default firestoreReference;
