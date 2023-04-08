import { Center, ICenter } from "src/common/components/elements/center/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "elements/Center",
  component: Center,
} as ComponentMeta<typeof Center>;

const Template: ComponentStory<typeof Center> = (args: ICenter) => <Center {...args} />;

export const Normal = Template.bind({});
Normal.args = { children: "this is Primary" };

export const Component = Template.bind({});
Component.args = {
  children: <Box width="16px" height="16px" sx={{ backgroundColor: "red" }}></Box>,
};
