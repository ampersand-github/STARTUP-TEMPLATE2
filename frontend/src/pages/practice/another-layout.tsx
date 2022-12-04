import { ReactElement } from "react";
import { NextPageWithLayout } from "src/pages/_app";

const AnotherLayoutPage: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

AnotherLayoutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <p>header</p>
      {page}
      <p>footer</p>
    </>
  );
};

export default AnotherLayoutPage;
