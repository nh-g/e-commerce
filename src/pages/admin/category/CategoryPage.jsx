// NPM Packages
import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";

// Project files
import useFetch from "../../../hooks/useFetch";
import Products from "./Products";
import ButtonBack from "../../../shared/ButtonBack";
import Spinner from "../../../shared/Spinner";
import BoxError from "../../../shared/BoxError";
import Delete from "../Delete";
import CreateProduct from "../CreateProducts";
import ButtonAdd from "../../../shared/ButtonAdd";
import ButtonEdit from "../ButtonEdit";

export default function CategoryPage() {
  const categories = useFetch("categories");
  const { categoryID } = useParams();
  const [toggler, setToggler] = useState(false);
  const currentCategory = getSelectedCategories(categories.data, categoryID);

  console.log("Category Page CATEGORIES", categories.data);

  function getSelectedCategories(array, key) {
    return array.filter((item) => {
      return item.id === key;
    })[0];
  }

  return (
    <>
      {categories.loading === true && <Spinner />}
      {categories.error !== null && <BoxError />}
      {!categories.loading && categories.error === null && (
        <main className="page">
          <section className="page-hero">
            <div className="admin-options">
              <ButtonAdd
                label="Product"
                toggler={toggler}
                setToggler={setToggler}
              />
              {/* <ButtonEdit to={`edit-category/${categoryID}`} /> */}

              <Delete path="categories" dataSelected={currentCategory} />
            </div>

            <h1>{currentCategory.title}</h1>
            <small className="section-description">
              {currentCategory.description}
            </small>
          </section>

          {toggler && (
            <CreateProduct category={currentCategory} setToggler={setToggler} />
          )}

          <Products category={currentCategory} />

            <ButtonBack label="Go back to Menu" />
        </main>
      )}
    </>
  );
}
