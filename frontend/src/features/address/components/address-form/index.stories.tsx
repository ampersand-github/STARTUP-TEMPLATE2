import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AddressFormPresenter } from "@features/address/components/address-form/index.presenter";
import { IAddress } from "@features/address/interfaces/address-interface";
import { useForm } from "react-hook-form";

export default {
  title: "features/address/AddressFormPresenter",
  component: AddressFormPresenter,
} as ComponentMeta<typeof AddressFormPresenter>;

const onSubmit = async (data: IAddress) => console.log("submit", data);

export const Template: ComponentStory<typeof AddressFormPresenter> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddress>();
  return (
    <AddressFormPresenter control={control} errors={errors} handleSubmit={handleSubmit(onSubmit)} />
  );
};

export const WithValue: ComponentStory<typeof AddressFormPresenter> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddress>({
    defaultValues: {
      postalCode: "1234567",
      prefecture: "東京都",
      city: "渋谷区",
      town: "渋谷",
      block: "1-1-1",
    },
  });
  return (
    <AddressFormPresenter control={control} errors={errors} handleSubmit={handleSubmit(onSubmit)} />
  );
};
