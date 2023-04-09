import React from "react";
import { IProfile } from "@features/profiles/interfaces/profile-interface";
import { saveProfile } from "@features/profiles/api/save-profile";
import { useProfileResult } from "@features/profiles/api/get-profile-result";
import { useAvatar } from "@features/profiles/api/use-avatar";
import { uploadAvatar } from "@features/profiles/api/upload-avatar";
import { ProfileFormPresenter } from "./index.presenter";

export const ProfileForm = () => {
  const { profileResult } = useProfileResult();
  const { imageUrl, refetchAvatar } = useAvatar();

  const profile = (): IProfile | undefined =>
    profileResult?.isOk && profileResult.value
      ? {
          iconPath: profileResult.value.iconPath,
          motto: profileResult.value.motto,
          profile: profileResult.value.profileText,
          userName: profileResult.value.nickname,
        }
      : undefined;

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (e.target.files) {
      const images = e.target.files[0];
      await uploadAvatar(images);
      await refetchAvatar();
    }
  };

  return (
    <ProfileFormPresenter
      imageUrl={imageUrl}
      profile={profile()}
      onAvatarChange={handleChange}
      onSubmit={saveProfile}
    />
  );
};
