import * as React from "react";
import {
  Button,
  CircularProgress,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Space } from "src/components/elements/space";
import { SIGN_IN_PAGE, SIGN_UP_PAGE } from "src/services/constraints/page-url";
import { IUseAuth } from "src/services/hooks/use-auth";

export interface IHeader {
  user: IUseAuth["user"];
  isUserLoading: IUseAuth["isUserLoading"];
  logout: IUseAuth["logout"];
  isMobileSize: boolean;
  white: string;
  backgroundColor: string;
}

export const Header = ({
  user,
  isUserLoading,
  logout,
  isMobileSize,
  white,
  backgroundColor,
}: IHeader) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: backgroundColor }}>
      <Toolbar>
        {/* タイトル */}
        <Link href={"/"} underline="none" sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight={"bold"} color={white}>
            Template
          </Typography>
        </Link>

        {/* 認証まわり */}
        {isUserLoading ? (
          <CircularProgress />
        ) : user ? (
          <Button onClick={logout}>ログアウト</Button>
        ) : (
          <>
            {/* 会員登録 */}
            <Link href={SIGN_UP_PAGE} underline="hover">
              <Button sx={{ color: white, opacity: 0.8 }}>
                <Typography variant="body2">会員登録</Typography>
              </Button>
            </Link>
            <Space width={isMobileSize ? 0.5 : 1} />

            {/* ログイン */}
            <Button
              href={SIGN_IN_PAGE}
              variant="contained"
              size={"small"}
              sx={{ color: white }}
            >
              <Typography variant="button">ログイン</Typography>
            </Button>
          </>
        )}

        <Space width={isMobileSize ? 2 : 4} />

        {/* メニュー */}
        <IconButton size="large" edge="start" aria-label="menu" color="inherit">
          <MenuIcon opacity={0.8} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
