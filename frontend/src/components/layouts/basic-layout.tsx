import { Header } from "src/components/organisms/header";
import { Section } from "src/components/organisms/section";
import { Footer } from "src/components/organisms/footer";
import { ReactNode } from "react";

export interface ISection {
  children: ReactNode;
}

export default function BasicLayout({ children }: ISection) {
  return (
    <>
      <Header />
      <Section>{children}</Section>
      <Footer />
    </>
  );
}
