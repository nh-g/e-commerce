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
        <div className="left-content">
          <img src={Image} alt="" />
        </div>

      <div className="right-content ">
        <div className="admin-options">
          <ButtonEdit to={`/edit-category/${id}`} />
          <Delete path="categories" dataSelected={item} />
        </div>

        <h2>{title.toUpperCase()}</h2>
        <p>{description}</p>
        <Link to={`/admin/${id}`}>
          <span className="cta">View {title.toUpperCase()}</span>
        </Link>
      </div>
    </div>
  );
}
