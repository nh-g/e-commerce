// NPM Packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project file
import Placeholder from "../../assets/images/image-placeholder.png";
import { uploadFile } from "../../scripts/firebase/cloudStorage";
import dataURLToFile from "../../scripts/upload-image/dataURLToFile";
import readImage from "../../scripts/upload-image/read-image";
import resizeImage from "../../scripts/upload-image/resizeImage";

export default function CategoryMasonry({ item, editList }) {
  // Constants
  const { id, link, title, description, imageURL } = item;

  return (
    <div className="masonry">

      <div className="left-content">
        <img src={imageURL} alt="" />
      </div>

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
