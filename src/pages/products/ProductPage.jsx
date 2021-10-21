// NPM packages
import { useParams, Link } from "react-router-dom";

// Project files
import useFetch from "../../hooks/useFetch";
import Description from "./Description";
import Ingredients from "./Ingredients";

import ButtonBack from '../../shared/ButtonBack'
import BoxError from "../../shared/BoxError";
import Spinner from "../../shared/Spinner";

export default function ProductPage() {
  // Hooks
  const products = useFetch("products");
  const { categoryID } = useParams();
  const { productID } = useParams();

  // Const
  const product = getRelatedItem(products.data, productID);
  console.log("Product Page", product);

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
        <main className="page-product">
          <Description product={product} />
          <h4>Ingredients:</h4>
          <Ingredients product={product} />
          <Link to={`/menu/${categoryID}`} className="btn btn-main btn-300">
            <ButtonBack label="Go back to Category" />
          </Link>
        </main>
      )}
    </>
  );
}
