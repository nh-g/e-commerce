// Project files
import { useStateValue } from "../../state/StateProvider";
import ImageLoader from "../../shared/ImageLoader";

export default function CheckoutProduct({ item }) {
  const { id, imageURL, title, price, rating, hideButton } = item;
  // Global state
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove the item from the Cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      {/* <img className="checkoutProduct-image" src={imageURL} /> */}
      <ImageLoader filePath={imageURL} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️ </p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
}
