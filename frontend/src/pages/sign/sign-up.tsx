import * as React from "react";
import { useAuth } from "@/services/hooks/use-auth";
import { setup } from "@/services/lib/csrf";
import { NextPage } from "next";
import { SignUpTemplate } from "@/components/templates/sign/sign-up-template";

const SignUp: NextPage = () => {
  const { user, signUp } = useAuth();

  return <SignUpTemplate user={user} signUp={signUp} />;
};
export const getServerSideProps = setup(async () => {
  return { props: {} };
});
export default SignUp;
