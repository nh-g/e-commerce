import Subtotal from "./Subtotal";
import { useStateValue } from "../../state/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Banner from '../../assets/images/seamless.png';

export default function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img className="checkout__ad" src={Banner} alt="" />
        {/* <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        /> */} 

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Cart</h2>

          {cart.map((item) => (
            <CheckoutProduct item={item} />
          ))}
        </div>
      </div>

      {/* <div className="checkout__right">
        <Subtotal />
      </div> */}
    </div>
  );
}
