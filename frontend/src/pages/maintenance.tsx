import React from "react";
import { Typography } from "@mui/material";
import { Center } from "@/components/elements/center";
import { NextPage } from "next";

const Maintenance: NextPage = () => {
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
