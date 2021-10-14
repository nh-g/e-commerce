//NPM packages
import { useState } from "react";

import form from "../../utils/form.json";
// import { validateDescr, validateTitle } from "../../scripts/formValidation";
import { createCategory, createCategoryURL } from "../../hooks/useCRUD";
import FormItem from "../../shared/FormItem";
import FormSubmit from "../../shared/FormSubmit";
import UploadImage from "../../shared/UploadImage";
import firestoreReference from "../../scripts/firebase/firebase";
import { createDocument } from "../../scripts/firebase/fireStore";
import { uploadFile } from "../../scripts/firebase/cloudStorage";
import dataURLToFile from "../../scripts/upload-image/dataURLToFile";
import readImage from "../../scripts/upload-image/read-image";
import resizeImage from "../../scripts/upload-image/resizeImage";

export default function CreateCategory({ categories, setToggler }) {
  // Hooks
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [myImageURL, setMyImageURL] = useState(imageURL);

  // Method
  async function onImageChange(event) {
    const target = event.target;
    const file = target.files[0];
    const filename = `images/candidate-image-${title}.png`;

    const originalImage = await readImage(file);
    const resizedImage = await resizeImage(originalImage, 250, 250);
    const finalImage = await dataURLToFile(resizedImage, `${filename}.png`);

    const fileUpload = await uploadFile(filename, finalImage);

    setMyImageURL(fileUpload);
  }

  //Methods
  // function handleUpload(event) {
  //   event.preventDefault();
  //   // if (typeof image === "object") {
  //   //   createCategory(category, image);
  //   // } else {
  //   createCategoryURL(category);
  //   // }
  // }
  function onSubmit(event) {
    event.preventDefault();

    const newCategory = {
      title: title.toLowerCase(),
      description: description,
      imageURL: myImageURL,
    };

    createDocument(firestoreReference, "categories", newCategory);
  }

  return (
    <section className="section-admin">
      <h2>Create Category</h2>
      <p className="admin-instructions">All fields are required</p>
      
      <form className="masonry">
        <div className="right-content ">
          <FormItem
            settings={form.title.settings}
            hook={[title, setTitle]}
            //   isValid={isTitleValid}
          />
          <FormItem
            settings={form.description.settings}
            hook={[description, setDescription]}
            //   isValid={isDescriptionValid}
          />
        </div>

        <div className="left-content">
          <b>Upload Thumbnail:</b>
          <label className="custom-file-chooser">
            <input
              accept="image/gif, image/jpeg, image/png"
              onChange={(event) => onImageChange(event)}
              type="file"
            />
            <img src={myImageURL} alt="User generated content" />
          </label>
        </div>

        {/* Buttons */}
        <button onClick={(event) => onSubmit(event)}>Create</button>
        <button onClick={() => setToggler(false)} className="btn-cancel">
          Cancel
        </button>
      </form>
    </section>
  );
}
