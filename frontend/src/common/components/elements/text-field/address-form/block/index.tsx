import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import React from "react";
import { IAddress } from "@common/components/organisms/address-form";

export interface IBlockTextField {
  control: Control<IAddress>;
  errors: FieldErrors<IAddress>;
}

export const BlockTextField = ({ control, errors }: IBlockTextField) => {
  return (
    <Controller
      name="block"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          autoComplete={"address-level4"}
          type="text"
          label="建物名・階層・部屋情報"
          error={errors.block !== undefined}
          helperText={errors.block?.message}
        />
      )}
    />
  );
};
