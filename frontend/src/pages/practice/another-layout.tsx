import { ReactElement } from "react";
import { NextPageWithLayout } from "src/pages/_app";
import AnotherLayout from "src/common/components/layouts/another-layout";

const AnotherLayoutPage: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

AnotherLayoutPage.getLayout = (page: ReactElement) => <AnotherLayout>{page}</AnotherLayout>;

export default AnotherLayoutPage;
