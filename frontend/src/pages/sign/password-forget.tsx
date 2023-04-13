import * as React from "react";
import { NextPage } from "next";
import { Suspense } from "react";
import { PasswordForgetContainer } from "@features/sign";

const PasswordForget: NextPage = () => {
  return (
    <Suspense fallback={<></>}>
      <PasswordForgetContainer />
    </Suspense>
  );
};
export default PasswordForget;
