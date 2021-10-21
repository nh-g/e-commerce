// NPM packages
import { useParams } from "react-router-dom";

// Project files
import useFetch from "../../../hooks/useFetch";
import Ingredients from "../../products/Ingredients";
import ButtonBack from "../../../shared/ButtonBack";
import BoxError from "../../../shared/BoxError";
import Spinner from "../../../shared/Spinner";
import AddToCart from "../../../shared/AddToCart";
import ButtonEdit from "../ButtonEdit";
import Delete from "../Delete";
export default function ProductPage() {
  // Hooks
  const products = useFetch("products");
  const { productID } = useParams();

  // Const
  const product = getRelatedItem(products.data, productID);
  function getRelatedItem(array, id) {
    return array.filter((item) => {
      return item.id === id;
    })[0];
  }

  return (
    <>
      {products.loading === true && <Spinner />}
      {products.error !== null && <BoxError />}
      {!products.loading && products.error === null && (
        <main className="page">
          <section className="page-hero">
            <div className="admin-options">
              <ButtonEdit to={`/edit-product/${product.id}`} />
              <Delete path="products" dataSelected={product} />
            </div>

            <h1>{product.title}</h1>
            <small>{product.description}</small>
          </section>

          <div className="masonry">
            <div className="left-content">
              <img className="product-image" alt="img" src={product.imageURL} />
            </div>
            <div className="right-content">
              <p className="product__price">
                <small>$</small>
                <strong>{product.price}</strong>
              </p>

              <p>{product.description}</p>

              <Ingredients product={product} />
              <br />
              <AddToCart item={product} />
            </div>
          </div>
          <br />
          <ButtonBack label="Go back to Category" />
        </main>
      )}
    </>
  );
}
