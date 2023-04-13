import React from "react";
import { SignUpPresenter } from "@features/sign/components/sign-up/index.presenter";
import { useAuth } from "@features/sign/hooks/use-auth";

export const SignUpContainer = () => {
  const { signUp } = useAuth();
  return <SignUpPresenter signUp={signUp}></SignUpPresenter>;
};
