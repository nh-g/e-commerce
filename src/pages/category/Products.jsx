import useFetch from "../../hooks/useFetch";
import Spinner from "../../shared/Spinner";
import BoxError from "../../shared/BoxError";
import MappingList from "../../shared/MappingList";
import ProductCard from "../../shared/ProductCard";

export default function Products({ category }) {
  // Hook
  const products = useFetch("products");

  // Const
  const listOfProducts = getSelectedProducts(products.data, category.id);

  function getSelectedProducts(array, categoryID) {
    return array.filter((item) => {
      return item.categoryID === categoryID;
    });
  }


  return (
    <>
      {products.loading === true && <Spinner />}
      {products.error !== null && <BoxError />}
      {!products.loading && products.error === null && (
        <>
          {listOfProducts.length === 0 ? (
            <h4 className="empty-list">More products are coming soon</h4>
          ) : (
            <section className="section-products ">
              <MappingList getData={listOfProducts} Component = {ProductCard} />
            </section>
          )}
        </>
      )}
    </>
  );
}
