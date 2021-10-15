import useFetch from "../../hooks/useFetch";
import Spinner from "../../shared/Spinner";
import BoxError from "../../shared/BoxError";

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

  // Component
  const ProductsItems = listOfProducts.map((item) => {
    return (
      <a
        key={item.id}
        href={`./${item.categoryID}/${item.id}`}
        className="card"
      >
        <img src={item.imageURL} alt="img" />
        <h3 className="title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <h2 className="price">{item.price} Kr</h2>
      </a>
    );
  });

  return (
    <>
      {products.loading === true && <Spinner />}
      {products.error !== null && <BoxError />}
      {!products.loading && products.error === null && (
        <>
          {listOfProducts.length === 0 ? (
            <h4 className="empty-list">More products are coming soon</h4>
          ) : (
            <section className="section-products ">{ProductsItems} </section>
          )}
        </>
      )}
    </>
  );
}
