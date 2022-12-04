import { Theme } from "@mui/material/styles/createTheme";
import { useTheme } from "@mui/material";
import { Footer } from "src/components/organisms/footer/index";

export const FooterContainer = () => {
  const theme: Theme = useTheme();
  const white = theme.palette.common.white;
  const backgroundColor = theme.palette.grey["900"];

  return Footer({
    white,
    backgroundColor,
  });
};
