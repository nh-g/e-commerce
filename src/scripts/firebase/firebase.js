// NPM Packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_89OW7GbPOli2xE5Y5fNCv6Sgw7N3y10",
  authDomain: "ecom-database-backup.firebaseapp.com",
  projectId: "ecom-database-backup",
  storageBucket: "ecom-database-backup.appspot.com",
  messagingSenderId: "661209146704",
  appId: "1:661209146704:web:47e49c9c9cdc35eba8b855",
};

const firebaseInstance = initializeApp(firebaseConfig);
const firestoreReference = getFirestore(firebaseInstance);
export const cloudStorageReference = getStorage(firebaseInstance);

export default firestoreReference;
