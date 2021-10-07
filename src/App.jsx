// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project files
import Navigation from "./shared/Navigation";
import HomePage from "./pages/homepage/Home";
import './styles/style.sass'
export default function App() {
  return (
    <div className="App">
      {/* Header */}
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* Home */}
    </div>
  );
}
