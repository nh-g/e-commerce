// NPM Packages

// Project files
import { updateDocument, deleteDocument } from "../scripts/firebase/fireStore";
import firestoreReference from "../scripts/firebase/firebase";

// Delete element by ID
export async function deleteElement(path, id) {
  deleteDocument(firestoreReference, path, id);
  console.log(path, " deleted", id);
}

// Edit element by ID

// export async function onUpdate(id, editedItem, path) {
//     updateDocument(firestoreReference, path, id, editedItem);
//   }
