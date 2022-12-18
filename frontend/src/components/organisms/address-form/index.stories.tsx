import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AddressForm, IAddressForm } from "./index";

export default {
  title: "organisms/AddressForm",
  component: AddressForm,
} as ComponentMeta<typeof AddressForm>;

const Template: ComponentStory<typeof AddressForm> = (args: IAddressForm) => (
  <AddressForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  address: undefined,
  onSubmit: (data) => console.log(data),
  isFetching: false,
  changePostCode: (value: string) => console.log(value),
};
