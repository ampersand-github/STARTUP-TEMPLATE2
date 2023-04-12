import React from "react";
import { NextPage } from "next";
import { Center } from "@common/components/elements/center";
import { Typography } from "@mui/material";

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
