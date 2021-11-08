import Subtotal from "./Subtotal";
import { useStateValue } from "../../state/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Banner from '../../assets/images/seamless.png';
import "./Checkout.css";

export default function Checkout() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img src={Banner} alt="" /> */}
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Cart</h2>

          {cart.map((item) => (
            <CheckoutProduct item={item} />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
