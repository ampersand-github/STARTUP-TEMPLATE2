import { Stack } from "@mui/material";
import { ReactNode } from "react";
import { ResponsiveStyleValue } from "@mui/system";

export interface ICenter {
  children: ReactNode;
  direction?: ResponsiveStyleValue<"row" | "row-reverse" | "column" | "column-reverse">;
  space?: number;
}

export const Center = ({ children, direction = "column", space = 0 }: ICenter) => {
  return (
    <Stack spacing={space} direction={direction} justifyContent="center" alignItems="center">
      {children}
    </Stack>
  );
};
