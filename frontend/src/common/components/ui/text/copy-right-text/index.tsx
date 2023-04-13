import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

export interface ICopyRightText {
  pageUrl: string;
  color?: string;
}

export const CopyRightText = ({ pageUrl, color = "black" }: ICopyRightText) => {
  const year = new Date().getFullYear();
  return (
    <Typography variant="body2" color={color} sx={{ opacity: "0.6" }} align="center">
      {"Copyright © "}
      <Link color="inherit" href={pageUrl}>
        ampersand {year}
      </Link>
    </Typography>
  );
};
