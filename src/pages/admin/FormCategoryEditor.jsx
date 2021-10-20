// NPM Packages
import { useState } from "react";

// Project files
import ImageUploader from "./ImageUploader";
import form from "../../utils/form.json";
import FormItem from "../../shared/FormItem";

export default function FormCategoryEditor({ onUpdate, item }) {
  const { id, title, imageURL, description } = item;
  const [categoryName, setCategoryName] = useState(title);
  const [categoryImageURL, setCategoryImageURL] = useState(imageURL);
  const [categoryDescription, setCategoryDescription] = useState(description);

  function updateCategory(event) {
    event.preventDefault();
    const category = {
      id: id,
      title: categoryName,
      imageURL: categoryImageURL,
      description: categoryDescription,
    };
    onUpdate(category);
  }
  return (
    <section className="section-admin">

      <form className="masonry">
        <div className="right-content ">
          <FormItem
            settings={form.title.settings}
            hook={[categoryName, setCategoryName]}
          />
          <FormItem
            settings={form.description.settings}
            hook={[categoryDescription, setCategoryDescription]}
          />
        </div>

        <div className="left-content">
          <ImageUploader
            imageURL={categoryImageURL}
            setImageURL={setCategoryImageURL}
            title={categoryName}
          />
          <div className="url">
            <p>... or copy/paste link :</p>
            <input
              type="text"
              onChange={(e) => setCategoryImageURL(e.target.value)}
              placeholder=" https://..."
            />
          </div>
        </div>
      </form>

      <div className="admin-options">
        <button onClick={updateCategory} className="btn btn-main btn-300">
          Update
        </button>
      </div>
    </section>
  );
}
