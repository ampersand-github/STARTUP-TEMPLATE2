import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ISignIcon, SignIcon } from ".";

export default {
  title: "elements/SignIcon",
  component: SignIcon,
} as ComponentMeta<typeof SignIcon>;

const Template: ComponentStory<typeof SignIcon> = (args: ISignIcon) => (
  <SignIcon {...args} />
);

export const Default = Template.bind({});
