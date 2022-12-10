import { Container, Stack } from "@mui/material";
import { ReactNode } from "react";

export interface ISection {
  children: ReactNode;
  isMobileSize: boolean;
  backgroundColor: string;
}

export const Section = ({ children, isMobileSize, backgroundColor }: ISection) => {
  const maxWidth = isMobileSize ? "xs" : "md";

  return (
    <Stack
      sx={{
        backgroundColor: backgroundColor,
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
          paddingTop: "24px",
          paddingBottom: "24px",
        }}
      >
        {children}
      </Container>
    </Stack>
  );
};
