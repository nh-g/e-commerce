// NPM Packages
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

//Project files
import flameIcon from "../assets/images/brand/flame.svg";
import { useStateValue } from "../state/StateProvider";
import { authentication } from "../scripts/firebase/authentication-firebase";

export default function NavigationBar() {
  // Global state
  const [{ cart, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      signOut(authentication);
    }
  };

  return (
    <nav id="navigation-bar">
      <Link exact to="/">
        <h1 className="header__logo">
          <img src={flameIcon} alt="" style={{ height: "30px" }} />
          Fireup
        </h1>
      </Link>

      <div className="flexbox-expand-space" />

      {/* <SearchBar /> */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/menu">
          Menu
          <img src={flameIcon} alt="" style={{ height: "10px" }} />
        </Link>

        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
