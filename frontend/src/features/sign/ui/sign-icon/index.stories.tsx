import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SignIcon } from "@features/sign/ui/sign-icon/index";

export default {
  title: "elements/SignIcon",
  component: SignIcon,
} as ComponentMeta<typeof SignIcon>;

const Template: ComponentStory<typeof SignIcon> = (args) => <SignIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "サインイン",
};
