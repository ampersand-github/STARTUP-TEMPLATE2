import { ReactNode } from "react";
import { Theme } from "@mui/material/styles/createTheme";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useIsMobileSize } from "@common/hooks/use-is-mobile-size";
import { AMPERSAND_PAGE, MY_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE } from "@common/configs/page-url";
import { SizedBox } from "@common/components/ui/sized-box";
import * as React from "react";
import { CopyRightText } from "@common/components/ui/text/copy-right-text";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth } from "@features/sign";

export interface IBasicLayout {
  children: ReactNode;
}

export default function BasicLayout({ children }: IBasicLayout) {
  const theme: Theme = useTheme();
  const { isMobileSize } = useIsMobileSize();
  const { user } = useAuth();
  const white = theme.palette.common.white;
  const maxWidth = isMobileSize ? "xs" : "md";

  const Header = () => {
    const SiteTitle = () => {
      return (
        <Link href={"/"} underline="none" sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight={"bold"} color={white}>
            Template
          </Typography>
        </Link>
      );
    };

    const SignUpButton = () => {
      return (
        <Button href={SIGN_UP_PAGE} sx={{ color: white, opacity: 0.8 }}>
          <Typography variant="body2">会員登録</Typography>
        </Button>
      );
    };

    const SignInButton = () => {
      return (
        <Button href={SIGN_IN_PAGE} variant="contained" size={"small"} sx={{ color: white }}>
          <Typography variant="button">ログイン</Typography>
        </Button>
      );
    };

    const MyPageButton = () => {
      return (
        <IconButton size="large" edge="start" aria-label="menu" color="inherit" href={MY_PAGE}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <PersonIcon opacity={0.8} />
            <Typography variant={"caption"}>各種設定</Typography>
          </Stack>
        </IconButton>
      );
    };

    return (
      <AppBar position="static" sx={{ backgroundColor: theme.palette.header.main }}>
        <Toolbar>
          <SiteTitle />

          {/* 認証まわり */}
          {user && <MyPageButton />}
          {user === null && (
            <>
              <SignUpButton />
              <SizedBox width={isMobileSize ? 0.5 : 1} />
              <SignInButton />
              <SizedBox width={isMobileSize ? 2 : 4} />
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  };

  const Main = () => {
    return (
      <Stack
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "top",
          alignItems: "center",
        }}
      >
        <Container maxWidth={maxWidth} sx={{ paddingTop: "24px", paddingBottom: "24px" }}>
          {children}
        </Container>
      </Stack>
    );
  };

  const Footer = () => {
    return (
      <Stack
        sx={{
          bottom: 0, // 最下部に固定
          height: "80px",
          backgroundColor: theme.palette.grey["900"],
          color: white,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box m="auto">
          <CopyRightText color={white} pageUrl={AMPERSAND_PAGE} />
        </Box>
      </Stack>
    );
  };

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
