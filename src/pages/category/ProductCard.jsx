// NPM packages
import { Link } from "react-router-dom";

// Project files
import Placeholder from "../../assets/images/flame.jpg";
import AddToCart from "../../shared/AddToCart";
import Ingredients from "../products/Ingredients";

export default function ProductCard({ item }) {
  // Properties
  const { id, title, imageURL, price, categoryID } = item;
  const Image =
    imageURL === "" || imageURL === null || imageURL === undefined
      ? Placeholder
      : imageURL;



  return (
    <div className="product">
      <Link to={`/menu/${categoryID}/${id}`}>
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <Ingredients product={item} />

        </div>
        <img src={Image} alt="bbq food" />
      </Link>

      <AddToCart item={item} />
    </div>
  );
}
