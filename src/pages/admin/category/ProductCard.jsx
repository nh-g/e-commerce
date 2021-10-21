// NPM packages
import { Link } from "react-router-dom";

// Project files
import Placeholder from "../../../assets/images/flame.jpg";
import Delete from "../Delete";
import ButtonEdit from '../ButtonEdit';
import AddToCart from "../../../shared/AddToCart";

export default function HomeProduct({ item }) {
  // Properties
  const { id, title, imageURL, price, rating, categoryID } = item;
  const Image =
    imageURL === "" || imageURL === null || imageURL === undefined
      ? Placeholder
      : imageURL;

  return (
    <div className="product">
      <Link to={`/menu/${categoryID}/${id}`}>
        <div className="product__info">
          <p>{title}</p>
          
          <div className="admin-options">
            <ButtonEdit to={`edit-product/${id}`}/>
            <Delete path="products" dataSelected={item} />
          </div>

          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {/* {Array(rating)
            .fill()
            .map((_, i) => (
              // <p>⭐️ </p>
              <p>★</p>
            ))} */}
          </div>
        </div>
        <img src={Image} alt="bbq food" />
      </Link>

      <AddToCart item ={item}/>

    </div>
  );
}
