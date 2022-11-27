import {
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Theme } from "@mui/material/styles/createTheme";

export const Header = () => {
  const theme: Theme = useTheme();
  const backgroundColor = theme.palette.grey["900"];
  return (
    <AppBar position="static" sx={{ backgroundColor: backgroundColor }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
