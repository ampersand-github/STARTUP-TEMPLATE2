import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles/createTheme";

export const useIsMobileSize = () => {
  const isMobileSize = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return { isMobileSize };
};
