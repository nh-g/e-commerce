// NPM Packages

// Project files
import { deleteDocument } from "../scripts/firebase/fireStore";
import firestoreReference from "../scripts/firebase/firebase";

// Delete element by id
export async function deleteElement(path, id) {
  deleteDocument(firestoreReference, path, id);
  console.log(path, " deleted", id);
}
