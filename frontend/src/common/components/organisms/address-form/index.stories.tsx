import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AddressForm, IAddressForm } from "src/common/components/organisms/address-form/index";

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
  changePostalCode: (value: string) => console.log(value),
};
