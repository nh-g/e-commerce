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
export async function createDoc(database, path, data) {
  const docRef = await addDoc(collection(database, path), data);
  console.log("Document written with ID: ", docRef.id);
}

// Read files
export async function getCollection(database, path) {
  const myCollection = collection(database, path);
  const mySnapshot = await getDocs(myCollection);
  const myList = mySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return myList;
}

// Update document
export async function modifyDoc(database, path, id, data) {
  const docReference = doc(database, path, id);
  await updateDoc(docReference, data);
  console.log("Document updated ");
}

// Delete document
export async function delDoc(database, path, id) {
  deleteDoc(doc(database, path, id));
  console.log("delDOC");
}
