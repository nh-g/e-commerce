// NPM Packages
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

//Project files
import flameIcon from "../assets/images/brand/flame.svg";

export default function NavigationBar() {
  return (
    <nav id="navigation-bar">
      <Link exact to="/">
        <h1>
          <img src={flameIcon} alt="" style={{ height: "30px" }} />
          Fireup
        </h1>
      </Link>

      <div className="flexbox-expand-space" />

      {/* <SearchBar /> */}
      <div className="search">
        <input className="searchInput" type="text" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="flexbox-expand-space" />

      <div className="right-items">
        <Link to="/menu">
          Menu <img src={flameIcon} alt="" style={{ height: "10px" }} />
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </nav>
  );
}
