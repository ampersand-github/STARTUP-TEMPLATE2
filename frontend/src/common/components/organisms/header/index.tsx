import * as React from "react";
import {
  Button,
  CircularProgress,
  IconButton,
  Link,
  Palette,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { AppBar } from "@mui/material";
import { SizedBox } from "@common/components/elements/space";
import { SIGN_IN_PAGE, SIGN_UP_PAGE } from "@common/configs/url/page-url";
import { IUseAuth } from "@common/hooks/use-auth";
import { SiteLogo } from "@common/components/elements/site-logo";
import PersonIcon from "@mui/icons-material/Person";

export interface IHeader {
  user: IUseAuth["user"];
  isUserLoading: IUseAuth["isUserLoading"];
  logout: IUseAuth["logout"];
  isMobileSize: boolean;
  isOpen: boolean;
  toggle: () => void;
  palette: Palette;
}

export const Header = ({ user, isUserLoading, isMobileSize, palette }: IHeader) => {
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

            <SizedBox width={isMobileSize ? 0.5 : 1} />

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

        <SizedBox width={isMobileSize ? 2 : 4} />

        {/* マイページ */}
        <IconButton size="large" edge="start" aria-label="menu" color="inherit" href={"/my"}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <PersonIcon opacity={0.8} />
            <Typography variant={"caption"}>各種設定</Typography>
          </Stack>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
