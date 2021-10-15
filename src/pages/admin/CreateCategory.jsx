//NPM packages
import { useState } from "react";

import form from "../../utils/form.json";
import FormItem from "../../shared/FormItem";
import firestoreReference from "../../scripts/firebase/firebase";
import { createDocument } from "../../scripts/firebase/fireStore";
import { uploadFile } from "../../scripts/firebase/cloudStorage";
import dataURLToFile from "../../scripts/upload-image/dataURLToFile";
import readImage from "../../scripts/upload-image/read-image";
import resizeImage from "../../scripts/upload-image/resizeImage";
import Placeholder from "../../assets/images/image-placeholder.png";

export default function CreateCategory({ categories, setToggler }) {
  // Constants
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const Image = imageURL === "" ? Placeholder : imageURL;

  // Method
  async function onImageChange(event) {
    const target = event.target;
    const file = target.files[0];
    const filename = `images/candidate-image-${title}.png`;

    const originalImage = await readImage(file);
    const resizedImage = await resizeImage(originalImage, 250, 250);
    const finalImage = await dataURLToFile(resizedImage, `${filename}.png`);

    const fileUpload = await uploadFile(filename, finalImage);

    setImageURL(fileUpload);
  }

  function onSubmit(event) {
    event.preventDefault();

    const newCategory = {
      title: title.toLowerCase(),
      description: description,
      imageURL: Image,
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
            required
          />
          <FormItem
            settings={form.description.settings}
            hook={[description, setDescription]}
            required
          />
        </div>

        <div className="left-content">
          <label className="custom-file-chooser">
            <input
              accept="image/gif, image/jpeg, image/png"
              onChange={(event) => onImageChange(event)}
              type="file"
              required
            />
            <img src={Image} alt="User generated content" />
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
