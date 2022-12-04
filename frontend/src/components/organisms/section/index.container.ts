import { ReactNode } from "react";
import { Theme } from "@mui/material/styles/createTheme";
import { useTheme } from "@mui/material";
import { useIsMobileSize } from "src/services/hooks/use-is-mobile-size";
import { Section } from "src/components/organisms/section/index";

export interface ISectionContainer {
  children: ReactNode;
}

export const SectionContainer = ({ children }: ISectionContainer) => {
  const theme: Theme = useTheme();
  const { isMobileSize } = useIsMobileSize();
  const backgroundColor = theme.palette.background.default;

  return Section({
    children,
    isMobileSize,
    backgroundColor,
  });
};
