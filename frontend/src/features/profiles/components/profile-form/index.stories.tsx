import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProfileFormPresenter } from "@features/profiles/components/profile-form/index.presenter";
import { initialProfileValue } from "@features/profiles/initial-values/initial-profile-value";
import { IProfile } from "@features/profiles/interfaces/profile-interface";

export default {
  title: "features/profiles/ProfileFormPresenter",
  component: ProfileFormPresenter,
} as ComponentMeta<typeof ProfileFormPresenter>;

const Template: ComponentStory<typeof ProfileFormPresenter> = (args) => {
  return <ProfileFormPresenter {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  imageUrl: "/placeholder.png",
  profile: initialProfileValue,
  onAvatarChange: async (avatar) => console.log("avatar", avatar),
  onSubmit: async (data: IProfile): Promise<void> => console.log("data", data),
};
