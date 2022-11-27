import { createTheme } from "@mui/material";
import { red, grey } from "@mui/material/colors";

// defaultは以下
// https://mui.com/material-ui/customization/default-theme/

export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    background: {
      default: grey[100],
    },
  },
  // https://mui.com/material-ui/customization/breakpoints/
  breakpoints: {
    values: {
      xs: 0, // mobile
      sm: 600, // tablet
      md: 900, // laptop
      lg: 1200, // desktop
      xl: 1536,
    },
  },
  // https://mui.com/material-ui/customization/spacing/
  spacing: 8, // 1space = 8px
});
