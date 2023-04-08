import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LinkText, ILinkText } from "src/common/components/elements/text/link-text/index";

export default {
  title: "elements/LinkText",
  component: LinkText,
} as ComponentMeta<typeof LinkText>;

const Template: ComponentStory<typeof LinkText> = (args: ILinkText) => <LinkText {...args} />;

export const Default = Template.bind({});
Default.args = { pageUrl: "/", text: "text" };
