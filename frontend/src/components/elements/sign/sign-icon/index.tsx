import Typography from "@mui/material/Typography";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Stack } from "@mui/material";

export interface ISignIcon {
  text: string;
  color: string;
  backGroundColor: string;
}

export const SignIcon = ({ text, color, backGroundColor }: ISignIcon) => {
  return (
    <Stack sx={{ display: "flex", alignItems: "center" }}>
      <Avatar sx={{ m: 1, color: color, backgroundColor: backGroundColor }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {text}
      </Typography>
    </Stack>
  );
};
