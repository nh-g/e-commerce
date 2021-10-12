// NPM packages
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";

// Create file
export async function createDoc(db, path, data) {
  const docRef = await addDoc(collection(db, path), data);
  console.log("Document written with ID: ", docRef.id);
}

// Read files
export async function getCollection(db, path) {
  const myCollection = collection(db, path);
  const mySnapshot = await getDocs(myCollection);
  const myList = mySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return myList;
}

// Update document
export async function modifyDoc(db, path, id, data) {
  const docReference = doc(db, path, id);
  await updateDoc(docReference, data);
  console.log("Document updated ");
}

// Delete document
export async function delDoc(db, path, id) {
  deleteDoc(doc(db, path, id));
  console.log("delDOC");
}
