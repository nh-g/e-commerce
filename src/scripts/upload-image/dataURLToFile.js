export default async function dataURLToFile(dataURL, filename) {
  const array = dataURL.split(",");
  const fileType = array[0].match(/:(.*?);/)[1];
  const binaryString = atob(array[1]);
  let length = binaryString.length; // must be let to allow the while to reduce it
  const uint8array = new Uint8Array(length);

  while (length--) {
    uint8array[length] = binaryString.charCodeAt(length);
  }

  return new File([uint8array], filename, { type: fileType });
}
