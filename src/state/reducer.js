export const initialState = {
  cart: [],
  user: null,
};

export default function reducer (state, action){
    switch(action.type){
        case "ADD_TO_CART":
            return addItem(state, action);
        default:
            return state;
    }
}

function addItem(state, action){
    const {item} = action;
    if (item !== null) 
    return {...state, cart: [...state.cart, item]} // return object
}

function getCartTotal (cart){
    cart?.reduce((amount, item) => item.price + amount, 0);
}
