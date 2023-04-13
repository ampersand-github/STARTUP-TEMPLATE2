import { Center, ICenter } from "@common/components/ui/center/index";
import { Box } from "@mui/material";
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
