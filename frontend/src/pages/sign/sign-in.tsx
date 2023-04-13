import * as React from "react";
import { NextPage } from "next";
import { Suspense } from "react";
import { WithNotAuth } from "@common/components/wrapper/with-not-auth";
import { SignInContainer } from "@features/sign";

const SignIn: NextPage = () => {
  return (
    <WithNotAuth>
      <Suspense fallback={<></>}>
        <SignInContainer />
      </Suspense>
    </WithNotAuth>
  );
};

export default SignIn;
