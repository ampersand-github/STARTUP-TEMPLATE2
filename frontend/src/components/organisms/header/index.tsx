import {
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Theme } from "@mui/material/styles/createTheme";
import { Space } from "src/components/elements/space";
import { useIsMobileSize } from "src/services/hooks/use-is-mobile-size";
import { SIGN_IN_PAGE, SIGN_UP_PAGE } from "src/services/constraints/page-url";

export const Header = () => {
  const theme: Theme = useTheme();
  const backgroundColor = theme.palette.grey["900"];
  const white = theme.palette.common.white;
  const { isMobileSize } = useIsMobileSize();

  return (
    <AppBar position="static" sx={{ backgroundColor: backgroundColor }}>
      <Toolbar>
        {/* タイトル */}
        <Link href={"/"} underline="none" sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            color={theme.palette.common.white}
          >
            Template
          </Typography>
        </Link>

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
        <Space width={2} />
        <Space width={isMobileSize ? 0 : 2} />

        {/* メニュー */}
        <IconButton size="large" edge="start" aria-label="menu" color="inherit">
          <MenuIcon opacity={0.8} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
