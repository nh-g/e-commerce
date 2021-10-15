import { Link } from "react-router-dom";

export default function CategoryMasonry({ item }) {
  const { link, title, description, imageURL } = item;

  return (
    <div className="masonry">
      <Link to={`/${link}`}>
        <div className="left-content">
          <img src={imageURL} alt="user generated content" />
        </div>
      </Link>
      <div className="right-content ">
        <h2>{title.toUpperCase()}</h2>
        <p>{description}</p>
        <Link to={`/${link}`}>
          <span className="cta">View {title.toUpperCase()}</span>
        </Link>
      </div>
    </div>
  );
}
