// NPM Packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTn5zWlmrA--R7vCV-9xQ2-HSGg-qEP48",
  authDomain: "backup-giang.firebaseapp.com",
  projectId: "backup-giang",
  storageBucket: "backup-giang.appspot.com",
  messagingSenderId: "933824973433",
  appId: "1:933824973433:web:d7ac34d906eeceecf622a8",
};

const firebaseInstance = initializeApp(firebaseConfig);
const firestoreReference = getFirestore(firebaseInstance);
export const cloudStorageReference = getStorage(firebaseInstance);

export default firestoreReference;
