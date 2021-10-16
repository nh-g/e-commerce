// NPM Packages
import { useParams, NavLink } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import Products from "./Products";
import ButtonBack from "../../shared/ButtonBack";
import Spinner from "../../shared/Spinner";
import BoxError from "../../shared/BoxError";

export default function CategoryPage() {
  //Const

  const categories = useFetch("categories");
  const { categoryID } = useParams();

  //Const
  const currentCategory = getSelectedCategories(categories.data, categoryID);

  function getSelectedCategories(array, id) {
    return array.filter((item) => {
      return item.id === id;
    })[0];
  }

  return (
    <>
      {categories.loading === true && <Spinner />}
      {categories.error !== null && <BoxError />}
      {!categories.loading && categories.error === null && (
        <main className="page-category">
          <section className="page-hero">
            <h1>{currentCategory.title}</h1>
            <small className="section-description">
              {currentCategory.description}
            </small>
          </section>

          <Products category={currentCategory} />
          <NavLink to={`/menu`} className="btn btn-main btn-300">
            <ButtonBack label="Go back to Menu" />
          </NavLink>
        </main>
      )}
    </>
  );
}
