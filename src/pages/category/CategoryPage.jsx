// NPM Packages
import { useParams } from "react-router-dom";

// Project files
import useFetch from "../../hooks/useFetch";
import Products from "./Products";
import ButtonBack from "../../shared/ButtonBack";
import Spinner from "../../shared/Spinner";
import BoxError from "../../shared/BoxError";

export default function CategoryPage() {
  const categories = useFetch("categories");
  const { categoryID } = useParams();
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
        <main className="page">
          <section className="page-hero">
            <h1>{currentCategory.title}</h1>
            <small className="section-description">
              {currentCategory.description}
            </small>
          </section>

          <Products category={currentCategory} />
            <ButtonBack label="Go back to Menu" />
        </main>
      )}
    </>
  );
}
