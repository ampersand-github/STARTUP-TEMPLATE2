import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Section, ISection } from ".";

export default {
  title: "organisms/Section",
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args: ISection) => (
  <Section {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <>text text text text text text text text text text </>,
  isMobileSize: true,
  backgroundColor: "white",
};
