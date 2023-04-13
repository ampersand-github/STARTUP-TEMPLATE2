import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CustomListItem, ICustomListItem } from "@common/components/ui/custom-list-item/index";

export default {
  title: "elements/CustomListItem",
  component: CustomListItem,
} as ComponentMeta<typeof CustomListItem>;

const Template: ComponentStory<typeof CustomListItem> = (args: ICustomListItem) => (
  <CustomListItem {...args} />
);

export const Default = Template.bind({});
Default.args = { text: "text", href: "/" };
