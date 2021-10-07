// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project files
import Navigation from "./shared/Navigation";
import HomePage from "./pages/home/Home";
import './styles/style.sass'
import Menu from "./pages/menu/Menu";
import Footer from './shared/Footer'
export default function App() {
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
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
