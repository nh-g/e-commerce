// NPM packages
import { Link } from "react-router-dom";

// Project files
import Placeholder from "../../../assets/images/flame.jpg";
import Delete from "../Delete";
import ButtonEdit from '../ButtonEdit';
import Ingredients from "../../products/Ingredients";
export default function HomeProduct({ item }) {
  // Properties
  const { id, title, imageURL, price, rating, categoryID } = item;
  const Image =
    imageURL === "" || imageURL === null || imageURL === undefined
      ? Placeholder
      : imageURL;

  return (
    <div className="product">
      <div className="admin-options">
        <ButtonEdit to={`/edit-product/${id}`} />
        <Delete path="products" dataSelected={item} />
      </div>
      <div className="product__info">
        <Link to={`/admin/${categoryID}/${id}`}>
          <p>{title}</p>

          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <Ingredients product={item} />
          <div className="product__rating">
            {/* {Array(rating)
            .fill()
            .map((_, i) => (
              // <p>⭐️ </p>
              <p>★</p>
            ))} */}
          </div>
        </Link>
      </div>
      <br />
      <img src={Image} alt="bbq food" />
    </div>
  );
}
