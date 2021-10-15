// NPM Packages

// Project files
import {
  createDocument,
  deleteDocument,
  updateDocument,
} from "../scripts/firebase/fireStore";
import firestoreReference from "../scripts/firebase/firebase";

// Delete element by ID
export async function deleteElement(path, id) {
  deleteDocument(firestoreReference, path, id);
  console.log(path, " deleted", id);
}

//Create a dish using URL link
export async function createDishURL(someDish, someImageURL) {
  const newDish = { ...someDish, imageURL: someImageURL };
  createDocument(firestoreReference, "categories", newDish);
}

// Update a category
// export async function updateCategoryBytes(newData, newImage, category) {
//   let updatedCategory = { ...category };

//   if (newData.title !== "") {
//     updatedCategory.title = newData.title;
//   }
//   if (newData.description !== "") {
//     updatedCategory.description = newData.description;
//   }
//   if (newImage !== "") {
//     // const newImageURL = await uploadImage(firebaseInstance, newImage);
//     updatedCategory.imageURL = newImageURL;
//   }
//   console.log(updatedCategory);
//   await updateDocument(
//     firestoreReference,
//     "categories",
//     category.id,
//     updatedCategory
//   );
//   alert(updatedCategory.title + " successfully updated ");
// }
