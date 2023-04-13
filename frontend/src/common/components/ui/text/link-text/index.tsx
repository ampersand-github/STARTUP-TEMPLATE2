import * as React from "react";
import Link from "@mui/material/Link";

export interface ILinkText {
  pageUrl: string;
  text: string;
}

export const LinkText = ({ pageUrl, text }: ILinkText) => {
  return (
    <Link href={pageUrl} variant="body2" sx={{ opacity: 0.8 }}>
      {text}
    </Link>
  );
};
