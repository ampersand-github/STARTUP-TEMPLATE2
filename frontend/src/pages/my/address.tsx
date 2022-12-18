import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Space } from "src/components/elements/space";
import { AddressFormContainer } from "src/components/organisms/address-form/index.container";
import { MY_PAGE } from "src/services/constraints/url/page-url";

export default function Address() {
  return (
    <Stack>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          トップ
        </Link>
        <Link color="inherit" href={MY_PAGE}>
          各種設定
        </Link>
        <Typography color="textPrimary">住所設定</Typography>
      </Breadcrumbs>
      <Space height={6} />
      <Typography variant={"h6"} fontWeight={"bold"} sx={{ opacity: 0.8 }}>
        住所設定
      </Typography>
      <Space height={3} />
      <AddressFormContainer />
    </Stack>
  );
}
