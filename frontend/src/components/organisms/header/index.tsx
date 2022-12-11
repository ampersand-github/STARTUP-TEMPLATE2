import * as React from "react";
import {
  Button,
  CircularProgress,
  IconButton,
  Link,
  Palette,
  Toolbar,
  Typography,
} from "@mui/material";
import { AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Space } from "src/components/elements/space";
import { SIGN_IN_PAGE, SIGN_UP_PAGE } from "src/services/constraints/url/page-url";
import { IUseAuth } from "src/services/hooks/use-auth";
import { MyDrawer } from "src/components/organisms/drawer";
import { SiteLogo } from "src/components/elements/site-logo";

export interface IHeader {
  user: IUseAuth["user"];
  isUserLoading: IUseAuth["isUserLoading"];
  logout: IUseAuth["logout"];
  isMobileSize: boolean;
  isOpen: boolean;
  toggle: () => void;
  palette: Palette;
}

export const Header = ({
  user,
  isUserLoading,
  logout,
  isMobileSize,
  isOpen,
  toggle,
  palette,
}: IHeader) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: palette.header.main }}>
      <Toolbar>
        {/* タイトル */}
        <Link href={"/"} underline="none" sx={{ flexGrow: 1 }}>
          <SiteLogo color={palette.common.white} />
        </Link>

        {/* 認証まわり */}
        {isUserLoading ? (
          <CircularProgress />
        ) : user ? (
          <></>
        ) : (
          <>
            {/* 会員登録 */}
            <Button href={SIGN_UP_PAGE} sx={{ color: palette.common.white, opacity: 0.8 }}>
              <Typography variant="body2">会員登録</Typography>
            </Button>

            <Space width={isMobileSize ? 0.5 : 1} />

            {/* ログイン */}
            <Button
              href={SIGN_IN_PAGE}
              variant="contained"
              size={"small"}
              sx={{ color: palette.common.white }}
            >
              <Typography variant="button">ログイン</Typography>
            </Button>
          </>
        )}

        <Space width={isMobileSize ? 2 : 4} />

        {/* メニュー */}
        <IconButton size="large" edge="start" aria-label="menu" color="inherit" onClick={toggle}>
          <MenuIcon opacity={0.8} />
          <MyDrawer
            isOpen={isOpen}
            toggle={toggle}
            user={user}
            logout={logout}
            black={palette.common.black}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
