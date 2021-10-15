// NPM Packages
import { Link } from "react-router-dom";
import Delete from "./Delete";

// Project file
import Placeholder from "../../assets/images/image-placeholder.svg";

export default function ItemCategory({ item }) {
  // Constants
  const { id, link, title, description, imageURL } = item;

  const Image =
    imageURL === "" || imageURL === null || imageURL === undefined
      ? Placeholder
      : imageURL;

  console.log("ITEM", item.id);


  return (
    <div className="masonry">
      <div className="left-content">
        <img src={Image} alt="" />
      </div>

      <div className="right-content ">
        <div>
          <Delete dataSelected={item} />
        </div>

        <h2>{title.toUpperCase()}</h2>
        <p>{description}</p>
        <Link to={`/${link}`}>
          <span className="cta">View {title.toUpperCase()}</span>
        </Link>
      </div>
    </div>
  );
}
