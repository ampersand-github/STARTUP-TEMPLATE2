import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SignUpPresenter } from "./index.presenter";

export default {
  title: "features/sign/sign-up",
  component: SignUpPresenter,
} as ComponentMeta<typeof SignUpPresenter>;

const Template: ComponentStory<typeof SignUpPresenter> = (args) => {
  return <SignUpPresenter />;
};

// return <SignInPresenter {...args} />;

export const Default = Template.bind({});
Default.args = {};
