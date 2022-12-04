import { Section } from "src/components/organisms/section";
import { Footer } from "src/components/organisms/footer";
import { ReactNode } from "react";
import { HeaderContainer } from "../organisms/header/index.container";

export interface ISection {
  children: ReactNode;
}

export default function BasicLayout({ children }: ISection) {
  return (
    <>
      <HeaderContainer />
      <Section>{children}</Section>
      <Footer />
    </>
  );
}
