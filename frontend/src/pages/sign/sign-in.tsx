import * as React from "react";
import { NextPage } from "next";
import { useAuth } from "@/services/hooks/use-auth";
import { setup } from "@/services/lib/csrf";
import { SignInTemplate } from "@/components/templates/sign/sign-in-template";

const SignIn: NextPage = () => {
  const { user, signIn } = useAuth();

  return <SignInTemplate user={user} signIn={signIn} />;
};

export const getServerSideProps = setup(async () => {
  return { props: {} };
});
export default SignIn;
