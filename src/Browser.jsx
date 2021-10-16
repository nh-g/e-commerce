// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project files
import Navigation from "./shared/Navigation";
import HomePage from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Login from "./pages/login/Login";
import Checkout from "./pages/checkout/Checkout";
import Footer from "./shared/Footer";
import AdminMenu from "./pages/admin/Categories";
import AdminCategoryPage from "./pages/admin/CategoryPage";
import CategoryPage from "./pages/category/CategoryPage";

export default function Browser() {
  return (
    <>
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
              <AdminCategoryPage />
            </Route>

            <Route path="/admin">
              <AdminMenu />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}
