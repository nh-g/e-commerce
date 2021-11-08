// NPM packages
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

// Project files
import "./styles/style.sass";
import Browser from "./Browser";
import { useStateValue } from "./state/StateProvider";
import { authentication as auth } from "./scripts/firebase/authentication-firebase";

export default function App() {
  // Global state
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    onAuthStateChanged(auth, (authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <div className="App">
      <Browser />
    </div>
  );
}
