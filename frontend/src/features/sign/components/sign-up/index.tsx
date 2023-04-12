import React from "react";
import { SignUpPresenter } from "@features/sign/components/sign-up/index.presenter";
import { signUp } from "@features/sign/functions/sign-up";

export const SignUpContainer = () => {
  return <SignUpPresenter signUp={signUp}></SignUpPresenter>;
};
