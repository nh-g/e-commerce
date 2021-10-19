import { useParams, Link } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import Description from "./Description";
import Ingredients from "./Ingredients";

import BoxError from "../../shared/BoxError";
import Spinner from "../../shared/Spinner";

export default function ProductPage() {
  // Hooks
  const products = useFetch("products");
  const { categoryID } = useParams();
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
        <main className="page-product">
          <Description product={product} />
          <Ingredients product={product} />
          <Link to={`/${categoryID}`}>
            <div>
              <span className="cta">Back to category</span>
            </div>
          </Link>
        </main>
      )}
    </>
  );
}
