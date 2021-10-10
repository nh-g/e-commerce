export const initialState = {
  cart: [],
  user: null,
};

export default function reducer(state, action) {
  switch (action.type) {

    case "ADD_TO_CART":
      return addItem(state, action);

    case "SET_USER":
      return setUser(state, action);

    case "REMOVE_FROM_CART":
      return removeFromCart(state, action);
      
    default:
      return state;
  }
}

function setUser(state, action) {
  const { user } = action;
  return { ...state, user: user };
}

function addItem(state, action) {
  const { item } = action;
  if (item !== null) return { ...state, cart: [...state.cart, item] }; // return object
}

export function getCartTotal(cart) {
  cart?.reduce((amount, item) => item.price + amount, 0);
}

function removeFromCart(state, action){
  const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

  let newCart = [state.cart];

  if (index >= 0) newCart.splice(index, 1);
  else alert(`Cant remove product (id: ${action.id}) as its not in Cart!`);

  return {...state, cart: newCart}
}
