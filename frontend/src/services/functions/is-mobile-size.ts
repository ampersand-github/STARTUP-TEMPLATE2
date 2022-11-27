import { Theme, useMediaQuery } from "@mui/material";

export const isMobileSize = (): boolean => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
};
