import React, { useEffect } from "react";
import { Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { PostalCodeTextField } from "@common/components/elements/text-field/address-form/postcal-code";
import { CityTextField } from "@common/components/elements/text-field/address-form/city";
import { BlockTextField } from "@common/components/elements/text-field/address-form/block";
import { PrefectureTextField } from "@common/components/elements/text-field/address-form/prefecture";
import { TownTextField } from "@common/components/elements/text-field/address-form/town";

export interface IAddress {
  postalCode: string;
  prefecture: string;
  city: string;
  town: string;
  block: string;
}

export const defaultAddressValue: IAddress = {
  postalCode: "",
  prefecture: "",
  city: "",
  town: "",
  block: "",
};

export interface IAddressForm {
  address?: IAddress;
  onSubmit: (data: IAddress) => void;
  changePostalCode: (value: string) => void;
}

export const AddressForm = ({ address, onSubmit, changePostalCode }: IAddressForm) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<IAddress>({ defaultValues: defaultAddressValue });
  const watchPostalCode = watch("postalCode");

  useEffect(() => {
    setValue("postalCode", address ? address.postalCode : "");
    setValue("prefecture", address ? address.prefecture : "");
    setValue("city", address ? address.city : "");
    setValue("town", address ? address.town : "");
    setValue("block", address ? address.block : "");
  }, [address]);

  useEffect(() => {
    if (watchPostalCode?.length !== 7) return;
    changePostalCode(watchPostalCode);
  }, [watchPostalCode]);

  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} spacing={2}>
      <PostalCodeTextField control={control} errors={errors} setValue={setValue} />
      <PrefectureTextField control={control} errors={errors} />
      <CityTextField control={control} errors={errors} />
      <TownTextField control={control} errors={errors} />
      <BlockTextField control={control} errors={errors} />
      <Button variant="contained" type="submit">
        送信する
      </Button>
    </Stack>
  );
};
