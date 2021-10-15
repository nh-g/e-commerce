import { useState } from "react";

// Project files
import form from "../../utils/form.json";
import FormItem from "../../shared/FormItem";
import Dropdown from "../../shared/Dropdown";
import firestoreReference from "../../scripts/firebase/firebase";
import { createDocument } from "../../scripts/firebase/fireStore";
import ImageUploader from "./ImageUploader";

export default function CreateProduct({ categories, setToggler }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageURL, setImageURL] = useState("");

  const newData = { title: title, description: description };
  console.log(newData, imageURL);


  function onSubmit(event) {
      event.preventDefault();

      const newProduct = {
        title: title.toLowerCase(),
        description: description,
        ingredients: ingredients,
        price: parseInt(price),
        categoryID: category.id,
        imageURL: imageURL,
      };

      createDocument(firestoreReference, "products", newProduct);
      setToggler(false);
  }

  return (
    <section className="section-admin">
      <h2> Edit Category</h2>
      <div className="drop-container">
        <Dropdown items={categories} hook={[category, setCategory]}>
          Category
        </Dropdown>
      </div>

      <form className="masonry">
        <div className="right-content ">
          <FormItem settings={form.title.settings} hook={[title, setTitle]} />
          <FormItem
            settings={form.description.settings}
            hook={[description, setDescription]}
          />
          <FormItem
            settings={form.ingredients.settings}
            hook={[
              ingredients.join(" "),
              (str) => {
                setIngredients(str.split(" "));
              },
            ]}
          />
          <FormItem
            settings={form.price.settings}
            hook={[price, setPrice]}
          />
        </div>
        <div className="left-content">
          <ImageUploader
            imageURL={imageURL}
            setImageURL={setImageURL}
            title={title}
          />
          <div className="url">
            <p>... or copy/paste link :</p>
            <input
              type="text"
              onChange={(e) => setImageURL(e.target.value)}
              placeholder=" https://..."
            />
          </div>
        </div>
      </form>
      {/* Buttons */}
      <button onClick={(event) => onSubmit(event)}>Create</button>
      <button onClick={() => setToggler(false)} className="btn-cancel">
        Cancel
      </button>
    </section>
  );
}
