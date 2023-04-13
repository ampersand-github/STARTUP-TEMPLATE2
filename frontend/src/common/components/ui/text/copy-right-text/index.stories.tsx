import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CopyRightText, ICopyRightText } from "@common/components/ui/text/copy-right-text/index";

export default {
  title: "elements/CopyRightText",
  component: CopyRightText,
} as ComponentMeta<typeof CopyRightText>;

const Template: ComponentStory<typeof CopyRightText> = (args: ICopyRightText) => (
  <CopyRightText {...args} />
);

export const Default = Template.bind({});
Default.args = { pageUrl: "/", color: "black" };
