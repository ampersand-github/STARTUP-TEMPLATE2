import React, { Suspense } from "react";
import { NextPage } from "next";
import { Typography } from "@mui/material";
import { SizedBox } from "@common/components/ui/sized-box";
import { WithAuth } from "@common/components/wrapper/with-auth";
import { ProfileForm } from "@features/profiles";
import { MyPageBreadcrumb } from "@common/components/ui/my-page-bread-crumb";

const Profile: NextPage = () => {
  return (
    <WithAuth>
      <MyPageBreadcrumb text={"プロフィール"} />
      <SizedBox height={6} />
      <Typography variant={"h6"} fontWeight={"bold"} sx={{ opacity: 0.8 }}>
        プロフィール設定
      </Typography>
      <Suspense fallback={<></>}>
        <ProfileForm />
      </Suspense>
    </WithAuth>
  );
};

export default Profile;
