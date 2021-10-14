// NPM packages
import { collection, doc } from "firebase/firestore/lite"; // normal methods
import { addDoc, updateDoc, getDocs, deleteDoc } from "firebase/firestore/lite"; // async methods

// Create file
export async function createDocument(database, path, data) {
  const collectionReference = collection(database, path);
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
export async function updateDocument(database, path, id, data) {
  const documentReference = doc(database, path, id);
  await updateDoc(documentReference, data);
  console.log("Document updated ");
}

// Delete document
export async function deleteDocument(database, path, id) {
  deleteDoc(doc(database, path, id));
  console.log("Document deleted");
}
