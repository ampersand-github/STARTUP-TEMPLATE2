import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SignInPresenter } from "./index.presenter";

export default {
  title: "features/sign/sign-in",
  component: SignInPresenter,
} as ComponentMeta<typeof SignInPresenter>;

const Template: ComponentStory<typeof SignInPresenter> = (args) => {
  return <SignInPresenter />;
};

// return <SignInPresenter {...args} />;

export const Default = Template.bind({});
Default.args = {};
