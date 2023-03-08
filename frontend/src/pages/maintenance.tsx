import React from "react";
import { Typography } from "@mui/material";
import { Center } from "@/components/elements/center";

const Maintenance = () => {
  return (
    <Center space={3}>
      <Typography variant={"h2"} fontWeight={"bold"}>
        メンテナンス
      </Typography>
      <Typography variant={"body1"}>只今、メンテナンス中です。</Typography>
    </Center>
  );
};

export default Maintenance;
