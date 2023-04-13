import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LinkText, ILinkText } from "@common/components/ui/text/link-text/index";

export default {
  title: "elements/LinkText",
  component: LinkText,
} as ComponentMeta<typeof LinkText>;

const Template: ComponentStory<typeof LinkText> = (args: ILinkText) => <LinkText {...args} />;

export const Default = Template.bind({});
Default.args = { pageUrl: "/", text: "text" };
