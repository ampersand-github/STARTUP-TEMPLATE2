import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PasswordForgetPresenter } from "./index.presenter";
import { useForm } from "react-hook-form";
import { IEmail } from "@features/sign/interfaces/email-interfeace";

export default {
  title: "features/sign/forget-password",
  component: PasswordForgetPresenter,
} as ComponentMeta<typeof PasswordForgetPresenter>;

const onSubmit = async (data: IEmail) => console.log("submit", data);
const Template: ComponentStory<typeof PasswordForgetPresenter> = (args) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmail>();
  return (
    <PasswordForgetPresenter
      control={control}
      errors={errors}
      handleSubmit={handleSubmit(onSubmit)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
