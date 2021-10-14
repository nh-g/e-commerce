import { createContext, useReducer, useContext } from "react";
import reducer from "./reducer";

// Prepare dataLayer
export const StateContext = createContext();

export const initialState = {
  cart: [],
  user: null,
  candidates: [],
};

// Wrap our app and provide it within dataLayer
export function StateProvider (props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
    <StateContext.Provider value={ [state, dispatch] }>
      {props.children}
    </StateContext.Provider>
    )
}

// Access the properties of StateContext by sending the created context (StateContext) as a parameter = CUSTOM Hook useContext 
export function useStateValue() {
    const context = useContext(StateContext);
    return context;
}

