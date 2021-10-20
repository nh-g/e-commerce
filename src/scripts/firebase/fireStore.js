// NPM packages
import { collection, doc } from "firebase/firestore/lite"; // normal methods
import {
  addDoc,
  updateDoc,
  getDocs,
  deleteDoc,
  getDoc,
} from "firebase/firestore/lite"; // async methods
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

// Get document
export async function getDocument(path, id) {
  const docRef = doc(firestoreReference, path, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const document = docSnap.data();
    return { id: id, ...document };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
