import { Breadcrumbs, Link, Typography } from "@mui/material";
import { MY_PAGE } from "@common/configs/page-url";
import React from "react";

interface Props {
  text: string;
}

export const MyPageBreadcrumb = ({ text }: Props): JSX.Element => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        トップ
      </Link>
      <Link color="inherit" href={MY_PAGE}>
        各種設定
      </Link>
      <Typography color="textPrimary">{text}</Typography>
    </Breadcrumbs>
  );
};
