// NPM Packages
import { getFirestore } from "firebase/firestore/lite";

// Project files
import { createDoc, modifyDoc, delDoc } from "../scripts/firebase/fireStore";
import firebaseInstance from "../scripts/firebase/firebase";

// The database to perform operations
const database = getFirestore(firebaseInstance);

// Create a category using image URL
export async function createCategoryURL(someCategory, someImageURL) {
  const newCategory = { ...someCategory, imagePath: someImageURL };
  createDoc(database, "categories", newCategory);
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
