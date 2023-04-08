import { Theme } from "@mui/material/styles/createTheme";
import { useTheme } from "@mui/material";
import { AMPERSAND_PAGE } from "@common/configs/url/page-url";
import { Footer } from "@common/components/organisms/footer/index";

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
