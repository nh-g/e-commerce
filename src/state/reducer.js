export default function reducer(state, action) {
  switch (action.type) {
    /** USER REDUCER */
    case "SET_USER":
      return setUser(state, action);

    /** CART REDUCER */
    case "ADD_TO_CART":
      return addItem(state, action);

    case "REMOVE_FROM_CART":
      return removeFromCart(state, action);

    default:
      return state;
  }
}

/** USER REDUCER */
function setUser(state, action) {
  const { user } = action;
  return { ...state, user: user };
}

/** CART REDUCER */
function addItem(state, action) {
  const { item } = action;
  if (item !== null) return { ...state, cart: [...state.cart, item] }; // return object
}

function removeFromCart(state, action) {
  const index = state.cart.findIndex((item) => item.id === action.id);
  let newCart = [...state.cart];
  if (index >= 0) {
    newCart.splice(index, 1);
  } else {
    console.warn(
      `Cant remove product (id: ${action.id}) as its not in basket!`
    );
  }

  return { ...state, cart: newCart };
}

// Subtotal
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);
