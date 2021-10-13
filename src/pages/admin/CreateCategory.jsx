//NPM packages
import { useState } from "react";

import form from "../../utils/form.json";
// import { validateDescr, validateTitle } from "../../scripts/formValidation";
import { createCategory, createCategoryURL } from "../../hooks/useCRUD";
import FormItem from "../../shared/FormItem";
import FormSubmit from "../../shared/FormSubmit";
import UploadImage from "../../shared/UploadImage";

export default function CreateCategory({ categories, setToggler }) {
  // Hooks
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imagePath, setImagePath] = useState("");

  // Const
//   const isTitleValid = validateTitle(title, categories);
//   const isDescriptionValid = validateDescr(description);
//   const isImageValid = imageURL.trim().length > 12 || typeof image === "object";
//   const isAllValid = isTitleValid && isDescriptionValid && isImageValid;
//   const isAllValid = isImageValid;

  const category = {
    title: title.toLowerCase(),
    description: description,
  };

  //Methods
  function handleUpload(event) {
    // event.preventDefault();
    // if (typeof image === "object") {
    //   createCategory(category, image);
    // } else {
    createCategoryURL(category, imagePath);
    // }
  }

  return (
    <section className="section-admin">
      <h2>Create Category</h2>
      <form className="form-admin" onSubmit={handleUpload}>
        <p className="admin-instructions">All fields are required</p>
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
        <FormItem
          settings={form.imagePath.settings}
          hook={[imagePath, setImagePath]}
          //   isValid={isDescriptionValid}
        />
        <input className="btn btn-main btn-send" type="submit" value="Create" />
        <button onClick={() => setToggler(false)} className="btn-cancel">
          Cancel
        </button>

        {/* <UploadImage setImage={setImage} setImageURL={setImageURL}>
          Upload New category image
        </UploadImage>

        <FormSubmit isAllValid={isAllValid} /> */}
      </form>
    </section>
  );
}
