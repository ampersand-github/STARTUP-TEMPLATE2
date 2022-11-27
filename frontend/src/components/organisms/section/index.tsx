import { Container, Stack, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { Theme } from "@mui/material/styles/createTheme";
import { isMobileSize } from "src/services/functions/is-mobile-size";

export interface ISection {
  children: ReactNode;
}

export const Section = ({ children }: ISection) => {
  const theme: Theme = useTheme();
  const maxWidth = isMobileSize() ? "xs" : "md";

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
      <Container
        maxWidth={maxWidth}
        sx={{
          paddingTop: theme.spacing(3),
          paddingBottom: theme.spacing(3),
        }}
      >
        {children}
      </Container>
    </Stack>
  );
};
