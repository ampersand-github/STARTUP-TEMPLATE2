import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import { AMPERSAND_PAGE } from "src/services/constraints/page-url";

export interface ICopyRightText {
  color?: string;
}

export const CopyRightText = ({ color = "black" }: ICopyRightText) => {
  const year = new Date().getFullYear();
  return (
    <Typography
      variant="body2"
      color={color}
      sx={{ opacity: "0.6" }}
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href={AMPERSAND_PAGE}>
        ampersand {year}
      </Link>
    </Typography>
  );
};
