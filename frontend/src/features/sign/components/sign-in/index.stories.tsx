import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { SignInPresenter } from "./index.presenter";

export default {
  title: "features/sign/sign-in",
  component: SignInPresenter,
} as Meta<typeof SignInPresenter>;

const Template: StoryFn<typeof SignInPresenter> = (args) => {
  return <SignInPresenter {...args} />;
};

export const Default = {
  render: Template,

  args: {
    signIn: async () => console.log("signIn"),
  },
};
