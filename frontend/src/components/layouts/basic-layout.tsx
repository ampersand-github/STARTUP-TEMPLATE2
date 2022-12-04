import { ReactNode } from "react";
import { HeaderContainer } from "../organisms/header/index.container";
import { FooterContainer } from "../organisms/footer/index.container";
import { SectionContainer } from "../organisms/section/index.container";

export interface IBasicLayout {
  children: ReactNode;
}

export default function BasicLayout({ children }: IBasicLayout) {
  return (
    <>
      <HeaderContainer />
      <SectionContainer>{children}</SectionContainer>
      <FooterContainer />
    </>
  );
}
