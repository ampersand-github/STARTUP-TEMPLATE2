import { ref, uploadBytes } from "@firebase/storage";
import { fireAuth, fireStorage } from "@common/configs/firebase-config";
import { saveProfile } from "@features/profiles/api/save-profile";
import { IProfile } from "@features/profiles/interfaces/profile-interface";

export const uploadAvatar = async (profile: IProfile, image: File): Promise<void> => {
  const images = image;
  const url = `users/${fireAuth.currentUser?.uid}/public/${images.name}`;
  const storageRef = ref(fireStorage, url);
  await uploadBytes(storageRef, images);

  await saveProfile({ ...profile, iconPath: images.name });
};
