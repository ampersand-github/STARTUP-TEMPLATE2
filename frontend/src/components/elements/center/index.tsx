import { Container } from "@mui/material";
import { ReactNode } from "react";

export interface ICenter {
  children: ReactNode;
}

export const Center = ({ children }: ICenter) => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      {children}
    </Container>
  );
};
