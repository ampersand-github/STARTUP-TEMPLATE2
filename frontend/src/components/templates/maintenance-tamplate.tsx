import { Center } from "@/components/elements/center";
import { Typography } from "@mui/material";
import React from "react";

export const MaintenanceTemplate = (): JSX.Element => {
  return (
    <Center space={3}>
      <Typography variant={"h2"} fontWeight={"bold"}>
        メンテナンス
      </Typography>
      <Typography variant={"body1"}>只今、メンテナンス中です。</Typography>
    </Center>
  );
};
