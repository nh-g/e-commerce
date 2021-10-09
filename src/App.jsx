// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project files
import "./styles/style.sass";
import Navigation from "./shared/Navigation";
import HomePage from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Login from "./pages/login/Login";
import Footer from "./shared/Footer";
import { OnAuthenticated } from "./pages/login/OnAuthenticated";
export default function App() {
  
  <OnAuthenticated />;

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />

        <Switch>
          <div className="main">
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/menu">
              <Menu />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
