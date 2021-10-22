// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project files
import Navigation from "./shared/Navigation";
import HomePage from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Checkout from "./pages/checkout/Checkout";
import Footer from "./shared/Footer";
import AdminMenu from "./pages/admin/menu/Categories";
import AdminCategoryPage from "./pages/admin/category/CategoryPage";
import CategoryPage from "./pages/category/CategoryPage";
import ProductPage from "./pages/products/ProductPage";
import Edit from "./pages/admin/Edit";
import FormProductEditor from "./pages/admin/FormProductEditor";
import FormCategoryEditor from "./pages/admin/FormCategoryEditor";
import AdminProductPage from "./pages/admin/product/ProductPage";
import ContactPage from "./pages/contact/Contact";
import SearchResult from "./pages/SearchResult";

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
            path="/admin/:categoryID/:productID"
            component={AdminProductPage}
          />

          <Route
            exact
            path="/admin/:categoryID"
            component={AdminCategoryPage}
          />

          <Route path="/edit-category/:itemID">
            <Edit FormEditor={FormCategoryEditor} path="categories" />
          </Route>

          <Route path="/edit-product/:itemID">
            <Edit FormEditor={FormProductEditor} path="products" />
          </Route>

          <Route exact path="/admin" component={AdminMenu} />

          <Route path="/checkout" component={Checkout} />

          <Route path="/contact" component={ContactPage} />

          <Route path="/results/:query" component={SearchResult} />
        </div>
      </Switch>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}
