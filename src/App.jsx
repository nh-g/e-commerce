// NPM Packages
import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// Project files
import "./styles/style.sass";
import { useStateValue } from "./state/StateProvider";
import { authentication as auth } from "./scripts/authentication-firebase";
import Navigation from "./shared/Navigation";
import HomePage from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Login from "./pages/login/Login";
import Footer from './shared/Footer'
export default function App() {
  // Global state
  const [{},dispatch] = useStateValue();

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
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
