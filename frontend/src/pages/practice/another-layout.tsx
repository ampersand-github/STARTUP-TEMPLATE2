import { ReactElement } from "react";
import { NextPageWithLayout } from "src/pages/_app";
import AnotherLayout from "src/components/layouts/another-layout";

const AnotherLayoutPage: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

AnotherLayoutPage.getLayout = function getLayout(page: ReactElement) {
  return <AnotherLayout>{page}</AnotherLayout>;
};

export default AnotherLayoutPage;
