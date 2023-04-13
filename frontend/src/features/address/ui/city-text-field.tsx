import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import React from "react";
import { IAddress } from "@features/address/interfaces/address-interface";

export interface ICityTextField {
  control: Control<IAddress>;
  errors: FieldErrors<IAddress>;
}

export const CityTextField = ({ control, errors }: ICityTextField) => {
  return (
    <Controller
      name="city"
      control={control}
      rules={{
        required: { value: true, message: "入力必須です" },
      }}
      render={({ field }) => (
        <TextField
          {...field}
          autoComplete={"address-level2"}
          label="市区町村"
          placeholder="千代田区"
          type="text"
          required={true}
          inputProps={{ maxLength: 100 }}
          error={errors.city !== undefined}
          helperText={errors.city?.message}
        />
      )}
    />
  );
};
