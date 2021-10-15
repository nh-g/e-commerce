// NPM Packages
import { Link } from "react-router-dom";
import Delete from "./Delete";

// Project file
import { onUpdate } from "../../hooks/useCRUD";
export default function ItemCategory({ item}) {
  // Constants
  const { id, link, title, description, imageURL } = item;

  console.log("ITEM", item.id)

  // function onUpdateButton() {
  //   const editedCandidate = {
  //     id: id,
  //     title: title,
  //     description: description,
  //     imageURL: imageURL,
  //   };

  //   onUpdate(id, editedCandidate);
  // }


  return (
    <div className="masonry">
      <div className="left-content">
        <img src={imageURL} alt="" />
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
