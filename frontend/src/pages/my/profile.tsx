import React, { Suspense } from "react";
import { NextPage } from "next";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { MY_PAGE } from "src/common/configs/url/page-url";
import { ProfileFormV2 } from "src/features/profiles/components/profile-form";
import { SizedBox } from "src/common/components/elements/space";
import { WithAuth } from "src/common/components/layouts/with-auth";

const Profile: NextPage = () => {
  return (
    <WithAuth>
      <MyPageBreadcrumb />
      <SizedBox height={6} />
      <Typography variant={"h6"} fontWeight={"bold"} sx={{ opacity: 0.8 }}>
        プロフィール設定
      </Typography>
      <Suspense fallback={<></>}>
        <ProfileFormV2 />
      </Suspense>
    </WithAuth>
  );
};

export default Profile;

const MyPageBreadcrumb = (): JSX.Element => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        トップ
      </Link>
      <Link color="inherit" href={MY_PAGE}>
        各種設定
      </Link>
      <Typography color="textPrimary">プロフィール設定</Typography>
    </Breadcrumbs>
  );
};
