import { Theme } from "@mui/material/styles/createTheme";
import { useTheme } from "@mui/material";
import { Footer } from "src/components/organisms/footer/index";
import { AMPERSAND_PAGE } from "src/services/constraints/url/page-url";

export const FooterContainer = () => {
  const theme: Theme = useTheme();
  const white = theme.palette.common.white;
  const backgroundColor = theme.palette.grey["900"];
  const url = AMPERSAND_PAGE;

  return Footer({
    white,
    backgroundColor,
    url,
  });
};
