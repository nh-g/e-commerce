// NPM Packages
import { Link } from "react-router-dom";
import Delete from "./Delete";
import { RiEdit2Fill } from "react-icons/ri";

// Project file
import Placeholder from "../../assets/images/flame.jpg";

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
      <Link to={`/admin/menu/${id}`}>
        <div className="left-content">
          <img src={Image} alt="" />
        </div>
      </Link>

      <div className="right-content ">
        <div className="admin-options">
          <form>
            <button className="btn btn-main btn-32 edit">
              <h4>
                <RiEdit2Fill /> Edit
              </h4>
            </button>
          </form>
          <Delete dataSelected={item} />
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
