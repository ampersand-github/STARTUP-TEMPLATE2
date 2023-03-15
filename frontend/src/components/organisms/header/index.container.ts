import { useIsMobileSize } from "src/services/hooks/use-is-mobile-size";
import { Theme } from "@mui/material/styles/createTheme";
import { Palette, useTheme } from "@mui/material";
import { Header } from "@/components/organisms/header/index";
import { useAuth } from "src/services/hooks/use-auth";
import { useDrawer } from "src/services/hooks/use-drawer";

export const HeaderContainer = () => {
  const { user, isUserLoading, logout } = useAuth();
  const { isMobileSize } = useIsMobileSize();
  const { isOpen, toggle } = useDrawer();
  const theme: Theme = useTheme();
  const palette: Palette = theme.palette;

  return Header({
    user,
    isUserLoading,
    logout,
    isMobileSize,
    isOpen,
    toggle,
    palette,
  });
};
