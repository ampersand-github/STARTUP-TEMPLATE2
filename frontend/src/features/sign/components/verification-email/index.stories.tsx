import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { VerificationMailPresenter } from "./index.presenter";

export default {
  title: "features/sign/verification-mail",
  component: VerificationMailPresenter,
} as Meta<typeof VerificationMailPresenter>;

const Template: StoryFn<typeof VerificationMailPresenter> = (args) => {
  return <VerificationMailPresenter {...args} />;
};

export const Default = {
  render: Template,

  args: {
    email: "abc@gmail.com",
    reSendVerifyEmail: async () => console.log("reSendVerifyEmail"),
    logout: async () => console.log("logout"),
  },
};
