import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { ProfileForm } from "@common/components/organisms/profile-form";
import React, { ChangeEvent } from "react";
import { SizedBox } from "@common/components/elements/space";
import { IProfile } from "@features/profiles/interfaces/profile-interface";
import { MY_PAGE } from "@common/configs/url/page-url";

export interface IProfileTemplate {
  isProfileLoading: boolean;
  isAvatarLoading: boolean;
  onSubmit: (data: IProfile) => void;
  profile: IProfile;
  onUpload: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const ProfileTemplate = ({
  isProfileLoading,
  isAvatarLoading,
  onSubmit,
  profile,
  onUpload,
}: IProfileTemplate): JSX.Element => {
  return (
    <Stack>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          トップ
        </Link>
        <Link color="inherit" href={MY_PAGE}>
          各種設定
        </Link>
        <Typography color="textPrimary">プロフィール設定</Typography>
      </Breadcrumbs>
      <SizedBox height={6} />
      <Typography variant={"h6"} fontWeight={"bold"} sx={{ opacity: 0.8 }}>
        プロフィール設定
      </Typography>
      <SizedBox height={3} />
      {!isProfileLoading && (
        <ProfileForm
          profile={profile}
          isAvatarLoading={isAvatarLoading}
          onSubmit={onSubmit}
          onImageUpload={onUpload}
        />
      )}
    </Stack>
  );
};
