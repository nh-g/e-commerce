// NPM packages
import { collection, doc } from "firebase/firestore/lite"; // normal methods
import { addDoc, updateDoc, getDocs, deleteDoc } from "firebase/firestore/lite"; // async methods
import firestoreReference from "./firebase";

// Create file
export async function createDocument(path, data) {
  const collectionReference = collection(firestoreReference, path);
  const documentReference = await addDoc(collectionReference, data);

  return documentReference.id;
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
export async function updateDocument(path, id, data) {
  const documentReference = doc(firestoreReference, path, id);
  await updateDoc(documentReference, data);
  console.log("Document updated ");
}

// Delete document
export async function deleteDocument(path, id) {
  const docReference = doc(firestoreReference, path, id);
  await deleteDoc(docReference);
  console.log("Document deleted ");
}
