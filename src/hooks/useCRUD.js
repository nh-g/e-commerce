// NPM Packages

// Project files
import { createDocument, updateDocument, deleteDocument } from "../scripts/firebase/fireStore";
import firestoreReference from "../scripts/firebase/firebase";

// Create a category using image URL
export async function createCategoryURL(someCategory, someImageURL) {
  const newCategory = { ...someCategory, imageURL: someImageURL };
  createDocument(firestoreReference, "categories", newCategory);
  alert(newCategory.title + " successfully added to category ");
} 

// export async function createCategory(someCategory, someImage) {
//   let newImageURL = "";
//   if (typeof someImage === "object") {
//     newImageURL = await uploadImage(firebaseInstance, someImage);
//   } else {
//     newImageURL = someImage;
//   }
//   const newCategory = { ...someCategory, imageURL: newImageURL };
//   createDoc(database, "categories", newCategory);
// }
