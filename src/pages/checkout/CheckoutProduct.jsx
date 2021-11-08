// Project files
import { useStateValue } from "../../state/StateProvider";
import "./CheckoutProduct.css";

export default function CheckoutProduct({ item }) {
  const { id, imageURL, title, price, hideButton } = item;
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
      <img className="checkoutProduct-image" src={imageURL} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
}
