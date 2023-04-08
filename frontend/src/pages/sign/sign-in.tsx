import * as React from "react";
import { NextPage } from "next";
import { useAuth } from "@common/hooks/use-auth";
import { SignInTemplate } from "src/common/components/templates/sign/sign-in-template";
import { setup } from "@common/lib/csrf";

const SignIn: NextPage = () => {
  const { signIn } = useAuth();

  return <SignInTemplate signIn={signIn} />;
};

export const getServerSideProps = setup(async () => {
  return { props: {} };
});
export default SignIn;
