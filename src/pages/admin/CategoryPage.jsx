// NPM Packages
import { useState } from "react";

import { useParams, NavLink } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import Products from "../category/Products";
import ButtonBack from "../../shared/ButtonBack";
import Spinner from "../../shared/Spinner";
import BoxError from "../../shared/BoxError";
import Delete from "./Delete";
import CreateProduct from "./CreateProducts";

export default function CategoryPage() {
  // Hooks
  const categories = useFetch("categories");
  const { categoryID } = useParams();
  const [toggler, setToggler] = useState(false);

  //Const
  const currentCategory = getSelectedCategories(categories.data, categoryID);

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
        <main className="page-category">
          
          <section className="page-hero">
                      <div className="add">
            <label>
              +
              <input
                className="btn-circle"
                onClick={() => setToggler(!toggler)}
              />
            </label>
            <p>Add Product</p>
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

          <NavLink to={`/menu`} className="btn btn-main btn-300">
            <ButtonBack label="Go back to Menu" />
          </NavLink>
        </main>
      )}
    </>
  );
}
