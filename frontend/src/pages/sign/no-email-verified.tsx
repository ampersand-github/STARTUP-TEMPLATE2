import * as React from "react";
import { NextPage } from "next";
import { VerificationEmailContainer } from "@features/sign";
import { Suspense } from "react";

const NoEmailVerified: NextPage = () => {
  return (
    <Suspense fallback={<></>}>
      <VerificationEmailContainer />
    </Suspense>
  );
};
export default NoEmailVerified;
