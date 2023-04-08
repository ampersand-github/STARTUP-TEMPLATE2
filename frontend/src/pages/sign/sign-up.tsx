import * as React from "react";
import { NextPage } from "next";
import { useAuth } from "@common/hooks/use-auth";
import { SignUpTemplate } from "src/common/components/templates/sign/sign-up-template";
import { setup } from "@common/lib/csrf";

const SignUp: NextPage = () => {
  const { signUp } = useAuth();

  return <SignUpTemplate signUp={signUp} />;
};
export const getServerSideProps = setup(async () => {
  return { props: {} };
});
export default SignUp;
