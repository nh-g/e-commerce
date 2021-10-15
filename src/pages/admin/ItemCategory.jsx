// NPM Packages
import { Link } from "react-router-dom";
import Delete from "./Delete";

// Project file
import { onUpdate } from "../../hooks/useCRUD";
import Placeholder from "../../assets/images/image-placeholder.png";

export default function ItemCategory({ item }) {
  // Constants
  const { id, link, title, description, imageURL } = item;

  const Image =
    imageURL === "" || imageURL === null || imageURL === undefined
      ? Placeholder
      : imageURL;

  console.log("ITEM", item.id);

  function onUpdateButton() {
    const editedItem = {
      id: id,
      title: title,
      description: description,
      imageURL: imageURL,
    };

    onUpdate(id, "categories", editedItem);
  }

  return (
    <div className="masonry">
      <div className="left-content">
        <img src={Image} alt="" />
      </div>

      <div className="right-content ">
        <div>
          <Delete dataSelected={item} />
          {/* <button onClick={() => onUpdateButton()}>Update me</button> */}
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
