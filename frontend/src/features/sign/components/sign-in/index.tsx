import React from "react";
import { SignInPresenter } from "@features/sign/components/sign-in/index.presenter";
import { useAuth } from "@features/sign/hooks/use-auth";

export const SignInContainer = () => {
  const { signIn } = useAuth();
  return <SignInPresenter signIn={signIn} />;
};
