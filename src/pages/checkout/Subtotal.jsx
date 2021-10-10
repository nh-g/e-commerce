// NPM Packages
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

// Project files
import { useStateValue } from "../../state/StateProvider";
import { getCartTotal } from "../../state/reducer";
import { CardActions } from "@material-ui/core";

export default function Subtotal() {

  const history = useHistory();

  // Global state
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({CardActions.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/checkout")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

