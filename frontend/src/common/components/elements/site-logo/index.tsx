import Typography from "@mui/material/Typography";
import * as React from "react";

export interface ISiteLogo {
  color: string;
}

export const SiteLogo = ({ color }: ISiteLogo) => {
  return (
    <Typography variant="h6" fontWeight={"bold"} color={color}>
      Template
    </Typography>
  );
};
