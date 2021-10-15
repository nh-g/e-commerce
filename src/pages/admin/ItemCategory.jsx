// NPM Packages
import { Link } from "react-router-dom";
import Delete from "./Delete";

// Project file
import Placeholder from "../../assets/images/image-placeholder.svg";

export default function ItemCategory({ item }) {
  // Constants
  const { id, title, description, imageURL } = item;

  const Image =
    imageURL === "" || imageURL === null || imageURL === undefined
      ? Placeholder
      : imageURL;

  console.log("ITEM", item.id);


  return (
    <div className="masonry">
      <Link to={`/menu/${id}`}>
        <div className="left-content">
          <img src={Image} alt="" />
        </div>
      </Link>

      <div className="right-content ">
        <div>
          <Delete dataSelected={item} />
        </div>

        <h2>{title.toUpperCase()}</h2>
        <p>{description}</p>
        <Link to={`/menu/${id}`}>
          <span className="cta">View {title.toUpperCase()}</span>
        </Link>
      </div>
    </div>
  );
}
