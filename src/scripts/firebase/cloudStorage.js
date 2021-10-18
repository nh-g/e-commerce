// NPM package
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Project files
import { cloudStorageReference } from "./firebase";

export async function uploadFile(filename, file) {
  const fileReference = ref(cloudStorageReference, filename);
  await uploadBytes(fileReference, file);

  return await getDownloadURL(fileReference);
}
