// NPM packages
import { useParams } from "react-router-dom";

// Project files
import useFetch from "../../../hooks/useFetch";
import Description from "../../products/Description";
import Ingredients from "../../products/Ingredients";
import ButtonBack from "../../../shared/ButtonBack";
import BoxError from "../../../shared/BoxError";
import Spinner from "../../../shared/Spinner";
import AddToCart from "../../../shared/AddToCart";
import ButtonEdit from "../ButtonEdit";
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
            <Description product={product} />
          </section>

          <div className="masonry">
            <div className="left-content">
              <img className="product-image" alt="img" src={product.imageURL} />
            </div>
            <div className="right-content">
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
