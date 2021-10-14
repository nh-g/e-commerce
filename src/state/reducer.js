export default function reducer(state, action) {
  switch (action.type) {
    /** ITEM REDUCER */
    case "CREATE_PROFILE":
      return createProfile(state, action);

    case "UPDATE_PROFILE":
      return updateProfile(state, action);

    case "SET_CANDIDATES":
      return setCandidates(action);

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

/** ITEM REDUCER */
function createProfile(state, action) {
  const { payload } = action;

  return [...state, payload];
}

function updateProfile(state, action) {
  const { payload } = action;
  const newState = [...state];
  const index = newState.findIndex((item) => item.id == payload.id);

  newState[index] = { ...payload };
  return newState;
}

function setCandidates(action) {
  const { payload } = action;

  return payload;
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

export function getCartTotal(cart) {
  cart?.reduce((amount, item) => item.price + amount, 0);
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
