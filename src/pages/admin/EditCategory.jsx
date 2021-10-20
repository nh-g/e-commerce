// NPM Packages
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

// Project files
import useFetch from "../../hooks/useFetch";
import { updateDocument } from "../../scripts/firebase/fireStore";
import Form from './Form'
import ImageUploader from "./ImageUploader";
export default function EditCategory() {
  const history = useHistory();
  const categories = useFetch("categories");

  console.log("Edit Category Page CATEGORIES", categories.data);

  const { categoryID } = useParams();

  const currentCategory = getSelectedCategories(categories.data, categoryID);
  function getSelectedCategories(array, key) {
    return array.filter((item) => {
      return item.id === key;
    })[0];
  }

  console.log("Edit Category Page currentCategory", currentCategory);



  // // const [categoryImageURL, setCategoryImageURL] = useState(
  // //   currentCategory.imageURL
  // // );

  // async function onEditCategory(event) {
  //   event.preventDefault();

  //   await updateDocument("categories", category.id, category);
  //   alert("Product has been updated");
  //   history.goBack();
  // }

  // function onChange(key, value) {
  //   const field = { [key]: value };
  //   setCategory({ ...category, ...field });
  //   }

  // function onSave() {
  //     onEditCategory();
  //   history.push("/admin");
  // }

  return (
    <div>
      <h1>Edit Page</h1>
      {/* <form className="masonry">
        <div className="right-content ">
          <Form editItem={category} onChange={onChange} />
        </div>

        <div className="left-content">
          <ImageUploader
            imageURL={categoryImageURL}
            setImageURL={setCategoryImageURL}
            title={currentCategory.title}
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

      <button onClick={() => onSave()}>Save</button> */}
    </div>
  );
}
