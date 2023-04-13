import * as React from "react";
import { NextPage } from "next";
import { Suspense } from "react";
import { WithNotAuth } from "@common/components/wrapper/with-not-auth";
import { SignUpContainer } from "@features/sign";

const SignUp: NextPage = () => {
  return (
    <WithNotAuth>
      <Suspense fallback={<></>}>
        <SignUpContainer />
      </Suspense>
    </WithNotAuth>
  );
};
export default SignUp;
