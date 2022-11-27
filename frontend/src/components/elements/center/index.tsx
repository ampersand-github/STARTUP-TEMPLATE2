import { Box } from "@mui/material";
import { ReactNode } from "react";

export interface ICenter {
  children: ReactNode;
}

export const Center = ({ children }: ICenter) => {
  return <Box m="auto">{children}</Box>;
};
