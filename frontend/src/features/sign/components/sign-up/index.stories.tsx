import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { SignUpPresenter } from "./index.presenter";

export default {
  title: "features/sign/sign-up",
  component: SignUpPresenter,
} as Meta<typeof SignUpPresenter>;

const Template: StoryFn<typeof SignUpPresenter> = (args) => {
  return <SignUpPresenter {...args} />;
};

export const Default = {
  render: Template,
  args: {
    signUp: async () => console.log("sign up"),
  },
};
