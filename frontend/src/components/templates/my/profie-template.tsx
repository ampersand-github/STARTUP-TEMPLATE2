import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import { MY_PAGE } from "@/services/constraints/url/page-url";
import { Space } from "@/components/elements/space";
import React, { ChangeEvent } from "react";
import { ProfileForm } from "@/components/organisms/profile-form";

export interface IProfileTemplate {
  profile: IProfile;
  onUpload: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IProfile {
  iconPath: string;
}

export const ProfileTemplate = ({ onUpload }: IProfileTemplate) => {
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
      <Space height={6} />
      <Typography variant={"h6"} fontWeight={"bold"} sx={{ opacity: 0.8 }}>
        プロフィール設定
      </Typography>
      <Space height={3} />
      <ProfileForm />
    </Stack>
  );
};
