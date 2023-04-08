import { CircularProgress } from "@mui/material";
import React from "react";
import { Center } from "@common/components/elements/center";

export const Loading = () => {
  return (
    <Center>
      <CircularProgress />
    </Center>
  );
};
