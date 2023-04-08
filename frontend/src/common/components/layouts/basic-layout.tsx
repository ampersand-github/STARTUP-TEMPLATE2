import { ReactNode } from "react";
import { HeaderContainer } from "src/common/components/organisms/header/index.container";
import { FooterContainer } from "src/common/components/organisms/footer/index.container";
import { Theme } from "@mui/material/styles/createTheme";
import { useTheme } from "@mui/material";
import { useIsMobileSize } from "@common/hooks/use-is-mobile-size";
import { Section } from "src/common/components/organisms/section";

export interface IBasicLayout {
  children: ReactNode;
}

export default function BasicLayout({ children }: IBasicLayout) {
  const theme: Theme = useTheme();
  const { isMobileSize } = useIsMobileSize();
  const backgroundColor = theme.palette.background.default;

  return (
    <>
      <HeaderContainer />
      <Section backgroundColor={backgroundColor} isMobileSize={isMobileSize}>
        {children}
      </Section>
      <FooterContainer />
    </>
  );
}
