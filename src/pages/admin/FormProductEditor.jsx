// NPM Packages
import { useState } from "react";

// Project files
import ImageUploader from "./ImageUploader";
import form from "../../utils/form.json";
import FormItem from "../../shared/FormItem";

export default function FormProductEditor({ onUpdate, item, history }) {
  const { id, title, imageURL, description, ingredients, price } = item;
  const [productName, setProductName] = useState(title);
  const [productImageURL, setProductImageURL] = useState(imageURL);
  const [productDescription, setProductDescription] = useState(description);
  const [ingredientList, setIngredientList] = useState(ingredients);
  const [productPrice, setProductPrice] = useState(price);

  function updateProduct(event) {
    event.preventDefault();
    const product = {
      id: id,
      title: productName,
      imageURL: productImageURL,
      description: productDescription,
      ingredients: ingredientList,
      price: productPrice,
    };
    onUpdate(product);
  }
  return (
    <section className="section-admin">
      <form className="masonry">
        <div className="right-content ">
          <FormItem
            settings={form.title.settings}
            hook={[productName, setProductName]}
          />
          <FormItem
            settings={form.description.settings}
            hook={[productDescription, setProductDescription]}
          />
          <FormItem
            settings={form.ingredients.settings}
            hook={[
              ingredientList.join(" "),
              (str) => {
                setIngredientList(str.split(" "));
              },
            ]}
          />
          <FormItem
            settings={form.price.settings}
            hook={[productPrice, setProductPrice]}
          />
        </div>
        <div className="left-content">
          <ImageUploader
            imageURL={productImageURL}
            setImageURL={setProductImageURL}
            title={productName}
          />
          <div className="url">
            <p>... or copy/paste link :</p>
            <input
              type="text"
              onChange={(e) => setProductImageURL(e.target.value)}
              placeholder=" https://..."
            />
          </div>
        </div>
      </form>
      <div className="admin-options">
        <button onClick={updateProduct} className="btn btn-main btn-300">
          Update
        </button>
        <button
          className="btn btn-main btn-300"
          onClick={() => history.goBack()}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}
