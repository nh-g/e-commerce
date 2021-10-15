// NPM Packages
import { Link } from "react-router-dom";

// Project files
import Placeholder from "../../assets/images/image-placeholder.svg";

export default function CategoryMasonry({ item }) {
  const { id, title, description, imageURL } = item;

    const Image =
      imageURL === "" || imageURL === null || imageURL === undefined
        ? Placeholder
        : imageURL;

  return (
    <div className="masonry">
      <Link to={`/menu/${id}`}>
        <div className="left-content">
          <img src={Image} alt="img" />
        </div>
      </Link>

      <div className="right-content">
        <h2>{title.toUpperCase()}</h2>
        <p>{description}</p>
        <Link to={`/menu/${id}`}>
          <span className="cta">View {title.toUpperCase()}</span>
        </Link>
      </div>
    </div>
  );
}
