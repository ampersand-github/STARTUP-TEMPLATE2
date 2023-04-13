import Typography from "@mui/material/Typography";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Stack } from "@mui/material";
import { theme } from "@common/configs/themes";
import { SizedBox } from "@common/components/ui/sized-box";

interface Props {
  text: string;
}

export const SignIcon = ({ text }: Props) => {
  const color = theme.palette.common.white;
  const backGroundColor = theme.palette.primary.main;
  return (
    <Stack sx={{ display: "flex", alignItems: "center" }}>
      <Avatar sx={{ m: 1, color: color, backgroundColor: backGroundColor }}>
        <LockOutlinedIcon />
      </Avatar>
      <SizedBox height={1} />
      <Typography component="h1" variant="h5">
        {text}
      </Typography>
    </Stack>
  );
};
