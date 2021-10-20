// NPM Packages
import { Link } from "react-router-dom";
import Delete from "../Delete";
import ButtonEdit from '../ButtonEdit';

// Project file
import Placeholder from "../../../assets/images/flame.jpg";

export default function ItemCategory({ item }) {
  // Constants
  const { id, title, description, imageURL } = item;

  const Image =
    imageURL === "" || imageURL === null || imageURL === undefined
      ? Placeholder
      : imageURL;

  return (
    <div className="masonry">
      <Link to={`/admin/menu/${id}`}>
        <div className="left-content">
          <img src={Image} alt="" />
        </div>
      </Link>

      <div className="right-content ">
        <div className="admin-options">
          <ButtonEdit to={`admin/edit/${id}`} />
          <Delete path="categories" dataSelected={item} />
        </div>

        <h2>{title.toUpperCase()}</h2>
        <p>{description}</p>
        <Link to={`/admin/menu/${id}`}>
          <span className="cta">View {title.toUpperCase()}</span>
        </Link>
      </div>
    </div>
  );
}
