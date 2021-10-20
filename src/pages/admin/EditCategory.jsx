import { useHistory, useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import {getDoc}
export default function EditCategory() {
  const history = useHistory();
  const categories = useFetch("categories");
  const { categoryID } = useParams();

  const currentCategory = getSelectedCategories(categories.data, categoryID);

  function getSelectedCategories(array, key) {
    return array.filter((item) => {
      return item.id === key;
    })[0];
  }

    async function onEditCategory(currentCategory) {
      await updateDocument(path, currentCategory.id, currentCategory);
      alert("Product has been updated");
      history.goBack();
    }


  return <div></div>;
}
