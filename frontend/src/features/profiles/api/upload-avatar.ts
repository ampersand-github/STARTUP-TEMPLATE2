import { ref, uploadBytes } from "@firebase/storage";
import { fireAuth, fireStorage } from "@common/configs/firebase-config";
import { saveProfile } from "@features/profiles/api/save-profile";
import { initialProfileValue } from "@features/profiles/initial-values/initial-profile-value";
import { toast } from "react-toastify";

export const uploadAvatar = async (image: File): Promise<void> => {
  const images = image;
  const url = `users/${fireAuth.currentUser?.uid}/public/${images.name}`;
  const storageRef = ref(fireStorage, url);
  await uploadBytes(storageRef, images);

  // todo refactoring
  await saveProfile({ ...initialProfileValue, iconPath: images.name });
  toast("Image uploaded successfully!", { type: "success" });
};
