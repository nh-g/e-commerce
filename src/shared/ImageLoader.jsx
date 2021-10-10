export default function ImageLoader({ filePath }) {
  const [fileFolder, fileName] = filePath.split("/");
  const imageURL =
    require(`../assets/images/${fileFolder}/${fileName}`).default;

  return <img className ="image" alt={fileName} src={imageURL} />;
}
