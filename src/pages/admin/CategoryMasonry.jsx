// NPM Packages
import { Link } from "react-router-dom";
import Delete from "./Delete";

// Project file

export default function CategoryMasonry({ item}) {
  // Constants
  const { id, link, title, description, imageURL } = item;

  console.log("ITEM", item.id)

  return (
    <div className="masonry">
      <div className="left-content">
        <img src={imageURL} alt="" />
      </div>

      <div className="right-content ">
        <Delete dataSelected={item} />
        <h2>{title.toUpperCase()}</h2>
        <p>{description}</p>
        <Link to={`/${link}`}>
          <span className="cta">View {title.toUpperCase()}</span>
        </Link>
      </div>
    </div>
  );
}
