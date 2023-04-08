import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import React from "react";
import { IAddress } from "@common/components/organisms/address-form";

export interface ITownTextField {
  control: Control<IAddress>;
  errors: FieldErrors<IAddress>;
}

export const TownTextField = ({ control, errors }: ITownTextField) => {
  return (
    <Controller
      name="town"
      control={control}
      rules={{
        required: { value: true, message: "入力必須です" },
      }}
      render={({ field }) => (
        <TextField
          {...field}
          autoComplete={"address-level3"}
          label="町名以下"
          placeholder="千代田一丁目一番地"
          type="text"
          required={true}
          inputProps={{ maxLength: 100 }}
          error={errors.town !== undefined}
          helperText={errors.town?.message}
        />
      )}
    />
  );
};
