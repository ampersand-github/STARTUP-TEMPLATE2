import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { VerificationMailPresenter } from "./index.presenter";

export default {
  title: "features/sign/verification-mail",
  component: VerificationMailPresenter,
} as ComponentMeta<typeof VerificationMailPresenter>;

const Template: ComponentStory<typeof VerificationMailPresenter> = (args) => {
  return <VerificationMailPresenter />;
};

// return <SignInPresenter {...args} />;

export const Default = Template.bind({});
Default.args = {};
