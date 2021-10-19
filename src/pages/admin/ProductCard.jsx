// NPM packages
import { Link } from "react-router-dom";

// Project files
import Placeholder from "../../assets/images/flame.jpg";
import { useStateValue } from "../../state/StateProvider";

export default function HomeProduct({ item }) {
  // Properties
  const { id, title, imageURL, price, rating, categoryID, description } = item;
  const Image =
    imageURL === "" || imageURL === null || imageURL === undefined
      ? Placeholder
      : imageURL;

  // Global State
  const [{ cart }, dispatch] = useStateValue();

  // Methods
  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        imageURL: imageURL,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
        <div className="admin-options">
          <form>
            <button className="btn btn-main btn-32 edit">
              <h4>
                <RiEdit2Fill /> Edit
              </h4>
            </button>
          </form>
          <Delete dataSelected={item} />
        </div>

      <Link to={`./${categoryID}/${id}`}>
          
        <div className="product__info">
          <p>{title}</p>
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

      <span className="cta" onClick={addToCart}>
        Add to Cart
      </span>
    </div>
  );
}
