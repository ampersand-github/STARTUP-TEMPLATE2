import { Box } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ISizedBox, SizedBox } from "@common/components/ui/sized-box/index";

export default {
  title: "elements/SizedBox",
  component: SizedBox,
  decorators: [
    (Story) => {
      return (
        <Box bgcolor={"red"}>
          <Story />
        </Box>
      );
    },
  ],
} as ComponentMeta<typeof SizedBox>;

const Template: ComponentStory<typeof SizedBox> = (args: ISizedBox) => <SizedBox {...args} />;

export const Default = Template.bind({});
Default.args = { width: 3, height: 12 };
