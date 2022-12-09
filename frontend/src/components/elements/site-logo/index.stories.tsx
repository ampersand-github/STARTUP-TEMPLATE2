import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ISiteLogo, SiteLogo } from ".";

export default {
  title: "elements/SiteLogo",
  component: SiteLogo,
} as ComponentMeta<typeof SiteLogo>;

const Template: ComponentStory<typeof SiteLogo> = (args: ISiteLogo) => (
  <SiteLogo {...args} />
);

export const Normal = Template.bind({});

