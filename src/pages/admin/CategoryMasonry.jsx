// NPM Packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project file
import ImageLoader from "../../shared/ImageLoader";

import { uploadFile } from "../../scripts/firebase/cloudStorage";
import dataURLToFile from "../../scripts/upload-image/dataURLToFile";
import readImage from "../../scripts/upload-image/read-image";
import resizeImage from "../../scripts/upload-image/resizeImage";

export default function CategoryMasonry({ item }) {
  // const { link, title, description, imagePath } = item;
  const { id, link, title, description, imageURL } = item;

  // const [myImageURL, setMyImageURL] = useState(imageURL);

  // // Method
  // async function onImageChange(event) {
  //   const target = event.target;
  //   const file = target.files[0];
  //   const filename = `images/candidate-image-${title}-${id}.png`;

  //   const originalImage = await readImage(file);
  //   const resizedImage = await resizeImage(originalImage, 250, 250);
  //   const finalImage = await dataURLToFile(resizedImage, `${filename}.png`);

  //   const fileUpload = await uploadFile(filename, finalImage);

  //   setMyImageURL(fileUpload);
  // }

  return (
    <div className="masonry">
      {/* <Link to={`/${link}`}>
        <div className="left-content">
          <ImageLoader filePath={imagePath} />
        </div>
      </Link> */}
      {/* Image Uploader  */}
      <div className="left-content">
        <img src={imageURL} alt="" />
        {/* <b>Upload Thumbnail:</b>
        <label className="custom-file-chooser">
          <input
            accept="image/gif, image/jpeg, image/png"
            onChange={(event) => onImageChange(event)}
            type="file"
          />
          <img src={myImageURL} alt="User generated content" />
        </label> */}
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
