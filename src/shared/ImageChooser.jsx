// Project files
import Placeholder from '../assets/images/image-placeholder.png'
import readImage from "../scripts/upload-image/readImage";
import { uploadFile } from "../scripts/firebase/cloudStorage";
import dataURLToFile from "../scripts/upload-image/dataURLToFile";
import readImage from "../scripts/upload-image/readImage";
import resizeImage from "../scripts/upload-image/resizeImage";

export default function ImageChooser({ imageURL, editItem }) {
  // Constants
  const Image = imageURL === "" ? Placeholder : imageURL;

  // Methods
  async function uploadImage(event, editItem, key) {
    const file = event.target.files[0];
    const filename = `images/candidate-image-${title}.png`;
    const originalImage = await readImage(file);
    const resizedImage = await resizeImage(originalImage, 250, 200);
    const finalImage = await dataURLToFile(resizedImage, `${filename}.png`);

    const fileUpload = await uploadFile(filename, finalImage);

    editItem(key, fileUpload);
  }

  return (
    <label className="custom-file-chooser">
      <input
        onChange={(event) => uploadImage(event, editItem, "imageURL")}
        type="file"
      />
      <img src={Image} alt="User generated content" />
    </label>
  );
}
