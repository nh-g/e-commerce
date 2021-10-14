export default async function readImage(file) {
  const reader = new FileReader();
  const result = await new Promise((resolve) => {
    reader.onload = (event) => resolve(event.target.result);
    reader.readAsDataURL(file);
  });

  return result;
}
