import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import React from "react";
import { IAddress } from "@features/address/interfaces/address-interface";
export interface IPrefectureTextField {
  control: Control<IAddress>;
  errors: FieldErrors<IAddress>;
}

export const PrefectureTextField = ({ control, errors }: IPrefectureTextField) => {
  return (
    <Controller
      name="prefecture"
      control={control}
      rules={{
        required: { value: true, message: "入力必須です" },
      }}
      render={({ field }) => (
        <TextField
          {...field}
          autoComplete={"address-level1"}
          label="都道府県"
          placeholder="東京都"
          type="text"
          required={true}
          inputProps={{ maxLength: 4 }}
          error={errors.prefecture !== undefined}
          helperText={errors.prefecture?.message}
        />
      )}
    />
  );
};
