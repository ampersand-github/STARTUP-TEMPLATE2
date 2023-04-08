import { ref, uploadBytes } from "@firebase/storage";
import { firebaseAuth, storage } from "src/common/configs/firebase-config";
import { saveProfile } from "@features/profiles/api/save-profile";
import { initialProfileValue } from "@features/profiles/initial-values/initial-profile-value";
import { toast } from "react-toastify";

export const uploadAvatar = async (image: File): Promise<void> => {
  const images = image;
  const storageRef = ref(storage, `users/${firebaseAuth.currentUser?.uid}/public/${images.name}`);
  await uploadBytes(storageRef, images);
  await saveProfile({ ...initialProfileValue, iconPath: images.name });
  toast("Image uploaded successfully!", { type: "success" });
};
