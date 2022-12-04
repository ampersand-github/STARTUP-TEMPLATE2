import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CopyRightText, ICopyRightText } from ".";

export default {
  title: "elements/CopyRightText",
  component: CopyRightText,
} as ComponentMeta<typeof CopyRightText>;

const Template: ComponentStory<typeof CopyRightText> = (
  args: ICopyRightText
) => <CopyRightText {...args} />;

export const Default = Template.bind({});
Default.args = { pageUrl: "/", color: "black" };
