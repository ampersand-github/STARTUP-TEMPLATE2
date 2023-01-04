import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ProfileForm, IProfileForm } from "./index";

export default {
  title: "organisms/ProfileForm",
  component: ProfileForm,
} as ComponentMeta<typeof ProfileForm>;

const Template: ComponentStory<typeof ProfileForm> = (args: IProfileForm) => (
  <ProfileForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  address: undefined,
  onSubmit: (data) => console.log(data),
  isFetching: false,
  changePostCode: (value: string) => console.log(value),
};
