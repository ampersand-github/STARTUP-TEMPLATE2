import { Box } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ISpace, Space } from ".";

export default {
  title: "elements/Space",
  component: Space,
  decorators: [
    (Story) => {
      return (
        <Box bgcolor={"red"}>
          <Story />
        </Box>
      );
    },
  ],
} as ComponentMeta<typeof Space>;

const Template: ComponentStory<typeof Space> = (args: ISpace) => (
  <Space {...args} />
);

export const Default = Template.bind({});
Default.args = { width: 3, height: 12 };
