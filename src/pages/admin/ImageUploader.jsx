import { uploadFile } from "../../scripts/firebase/cloudStorage";
import dataURLToFile from "../../scripts/upload-image/dataURLToFile";
import readImage from "../../scripts/upload-image/read-image";
import resizeImage from "../../scripts/upload-image/resizeImage";
import Placeholder from "../../assets/images/image-placeholder.png";

export default function ImageUploader({imageURL, setImageURL, title}) {
    
    const Image = imageURL === "" ? Placeholder : imageURL;

      // Method
    async function onImageChange(event) {
        const target = event.target;
        const file = target.files[0];
        const filename = `images/candidate-image-${title}.png`;

        const originalImage = await readImage(file);
        const resizedImage = await resizeImage(originalImage, 250, 250);
        const finalImage = await dataURLToFile(resizedImage, `${filename}.png`);

        const fileUpload = await uploadFile(filename, finalImage);

        setImageURL(fileUpload);
    }

    return (
        <label className="custom-file-chooser">
        <input
            accept="image/gif, image/jpeg, image/png"
            onChange={(event) => onImageChange(event)}
            type="file"
            // required
        />
        <img src={Image} alt="User generated content" />
        </label>
    )
}
