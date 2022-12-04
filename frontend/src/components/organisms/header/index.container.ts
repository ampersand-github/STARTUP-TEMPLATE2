import { useIsMobileSize } from "src/services/hooks/use-is-mobile-size";
import { Theme } from "@mui/material/styles/createTheme";
import { useTheme } from "@mui/material";
import { Header } from "src/components/organisms/header/index";
import { useAuth } from "src/services/hooks/use-auth";

export const HeaderContainer = () => {
  const { user, isUserLoading, logout } = useAuth();
  const { isMobileSize } = useIsMobileSize();
  const theme: Theme = useTheme();
  const white = theme.palette.common.white;
  const backgroundColor = theme.palette.grey["900"];

  return Header({
    user,
    isUserLoading,
    logout,
    isMobileSize,
    white,
    backgroundColor,
  });
};
