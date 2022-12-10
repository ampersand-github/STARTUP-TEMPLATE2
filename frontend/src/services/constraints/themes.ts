import { createTheme } from "@mui/material";
import { red, grey } from "@mui/material/colors";

// プロパティの追加
// https://qiita.com/quarter789_/items/c25a17d641a0a5da5366
declare module "@mui/material/styles" {
  interface Palette {
    header: { main: string };
    footer: { main: string };
  }
  interface PaletteOptions {
    header?: { main?: string };
    footer?: { main?: string };
  }
}

// defaultは以下
// https://mui.com/material-ui/customization/default-theme/

export const theme = createTheme({
  palette: {
    primary: { main: red[500] },
    background: { default: grey[100] },
    header: { main: grey[900] },
    footer: { main: grey[900] },
  },
  // https://mui.com/material-ui/customization/breakpoints/
  breakpoints: {
    values: {
      xs: 0, // mobile
      sm: 600, // tablet
      md: 900, // laptop
      lg: 1200, // desktop
      xl: 1600,
    },
  },
  // https://mui.com/material-ui/customization/spacing/
  spacing: 8, // 1space = 8px
});
