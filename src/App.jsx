// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

// Project files
import "./styles/style.sass";
import Navigation from "./shared/Navigation";
import HomePage from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Login from "./pages/login/Login";
import Checkout from "./pages/checkout/Checkout";
import Footer from "./shared/Footer";
import { useStateValue } from "./state/StateProvider";
import { authentication as auth } from "./scripts/firebase/authentication-firebase";
import AdminMenu from "./pages/admin/Categories";
import CategoryPage from "./pages/category/CategoryPage";

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
      <BrowserRouter>
        <Navigation />

        <Switch>
          <div className="main">
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/menu">
              <Menu />
            </Route>

            <Route path="/menu/:categoryID">
              <CategoryPage />
            </Route>

            <Route path="/admin/menu/:categoryID">
              <CategoryPage />
            </Route>

            <Route path="/admin">
              <AdminMenu />
            </Route>

            {/* <Route path="/login">
              <Login />
            </Route> */}

            <Route path="/checkout">
              <Checkout />
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
