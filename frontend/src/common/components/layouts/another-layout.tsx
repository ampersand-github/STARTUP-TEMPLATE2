import { ReactNode } from "react";

export interface IAnotherLayout {
  children: ReactNode;
}

export default function AnotherLayout({ children }: IAnotherLayout) {
  return (
    <>
      <p>header</p>
      <>{children}</>
      <p>footer</p>
    </>
  );
}
