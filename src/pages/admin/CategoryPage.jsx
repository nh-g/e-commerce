// NPM Packages
import { useParams, NavLink } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import Products from "./Products";
import ButtonBack from "../../shared/ButtonBack";
import Spinner from "../../shared/Spinner";
import BoxError from "../../shared/BoxError";
import Delete from "./Delete";

export default function CategoryPage() {
  // Hooks
  const categories = useFetch("categories");
  const { categoryID } = useParams();

  //Const
  const currentCategory = getSelectedCategories(categories.data, categoryID);

  function getSelectedCategories(array, id) {
    return array.filter((item) => {
      return item.id === categoryID;
    })[0];
  }

  return (
    <>
      {categories.loading === true && <Spinner />}
      {categories.error !== null && <BoxError />}
      {!categories.loading && categories.error === null && (
        <main className="page-category">
          <h1>{currentCategory.title}</h1>

          <section className="section-description">
            <p>{currentCategory.description}</p>
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
