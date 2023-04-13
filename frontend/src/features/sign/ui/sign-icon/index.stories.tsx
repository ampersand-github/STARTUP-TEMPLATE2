import { Meta } from "@storybook/react";
import { SignIcon } from "@features/sign/ui/sign-icon/index";

export default {
  title: "elements/SignIcon",
  component: SignIcon,
} as Meta<typeof SignIcon>;

export const Default = {
  args: {
    text: "サインイン",
  },
};
