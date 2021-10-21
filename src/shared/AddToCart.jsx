import { useStateValue } from "../state/StateProvider";

export default function AddToCart({item}) {
  // Properties
  const { id, title, imageURL, price, rating, categoryID } = item;
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
    <span className="cta" onClick={addToCart}>
      Add to Cart
    </span>
  );
}
