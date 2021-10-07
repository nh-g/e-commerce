export default function ImageLoader({ filePath }) {
  const [fileFolder, fileName] = filePath.split("/");
  const imageURL =
    require(`../assets/images/${fileFolder}/${fileName}`).default;

  return <img alt={fileName} src={imageURL} />;
}
