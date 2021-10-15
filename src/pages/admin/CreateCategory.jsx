//NPM packages
import { useState } from "react";

import form from "../../utils/form.json";
import FormItem from "../../shared/FormItem";
import firestoreReference from "../../scripts/firebase/firebase";
import { createDocument } from "../../scripts/firebase/fireStore";
import ImageUploader from "./ImageUploader";

export default function CreateCategory({ setToggler }) {
  // Constants
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  // Methods
  function onSubmit(event) {
    event.preventDefault();

    const newCategory = {
      title: title.toLowerCase(),
      description: description,
      imageURL: imageURL,
    };

    createDocument(firestoreReference, "categories", newCategory);
    setToggler(false);
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
          <ImageUploader imageURL={imageURL} setImageURL={setImageURL} title={title}/>
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
