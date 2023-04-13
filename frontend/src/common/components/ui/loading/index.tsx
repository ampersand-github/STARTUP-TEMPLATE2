import { CircularProgress } from "@mui/material";
import React from "react";
import { Center } from "@common/components/ui/center";

export const Loading = () => {
  return (
    <Center>
      <CircularProgress />
    </Center>
  );
};
