// Project files
import ImageLoader from "../../shared/ImageLoader";
import { useStateValue } from "../../state/StateProvider";

export default function HomeProduct({ item }) {
  // Properties
  const { id, title, imageURL, price, rating } = item;

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
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              // <p>⭐️ </p>
              <p>★</p>
            ))}
        </div>
      </div>

      <ImageLoader filePath={imageURL} />

      <span className="cta" onClick={addToCart}>
        Add to Cart
      </span>
    </div>
  );
}
