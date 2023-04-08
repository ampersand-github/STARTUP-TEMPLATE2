import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Footer, IFooter } from "src/common/components/organisms/footer/index";

export default {
  title: "organisms/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args: IFooter) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = { white: "black", backgroundColor: "white", url: "/" };
