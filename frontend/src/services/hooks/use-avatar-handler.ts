import React, { useState } from "react";
import { storage } from "@/services/configs/firebase-config";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";

export const useAvatarHandler = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const uploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const images = e.target.files[0];
      const storageRef = ref(storage, "images/" + images.name);
      await uploadBytes(storageRef, images);
      alert("Image uploaded successfully!");
    }
  };

  const fetchAvatar = async (avatarImageName: string) => {
    const storageRef = ref(storage, "images/" + avatarImageName);
    const url = await getDownloadURL(storageRef);
    setAvatarUrl(url);
  };

  return { avatarUrl, uploadAvatar, fetchAvatar };
};
