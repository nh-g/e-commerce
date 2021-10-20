// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project files
import Navigation from "./shared/Navigation";
import HomePage from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Login from "./pages/login/Login";
import Checkout from "./pages/checkout/Checkout";
import Footer from "./shared/Footer";
import AdminMenu from "./pages/admin/menu/Categories";
import AdminCategoryPage from "./pages/admin/category/CategoryPage";
import CategoryPage from "./pages/category/CategoryPage";
import ProductPage from "./pages/products/ProductPage";
import Edit from "./pages/admin/Edit";
import FormProductEditor from "./pages/admin/FormProductEditor";
import FormCategoryEditor from "./pages/admin/FormCategoryEditor"
export default function Browser() {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <div className="main">
          <Route exact path="/" component={HomePage} />

          <Route exact path="/menu" component={Menu} />

          <Route exact path="/menu/:categoryID" component={CategoryPage} />

          <Route path="/menu/:categoryID/:productID" component={ProductPage} />

          <Route
            exact
            path="/admin/:categoryID"
            component={AdminCategoryPage}
          />

          <Route exact path="/admin/edit-category/:itemID">
            <Edit FormEditor={FormCategoryEditor} path="categories" />
          </Route>

          <Route exact path="/admin/edit-product/:itemID">
            <Edit FormEditor={FormProductEditor} path="products" />
          </Route>

          <Route exact path="/admin" component={AdminMenu} />

          <Route path="/login" component={Login} />

          <Route path="/checkout" component={Checkout} />
        </div>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
