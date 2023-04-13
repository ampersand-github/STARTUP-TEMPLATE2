import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import React from "react";
import { IAddress } from "@features/address/interfaces/address-interface";

export interface IPostalCodeTextField {
  control: Control<IAddress>;
  errors: FieldErrors<IAddress>;
}

export const PostalCodeTextField = ({ control, errors }: IPostalCodeTextField) => {
  const onlyNumberRegex = new RegExp(/^[0-9]*$/);
  return (
    <Controller
      name="postalCode"
      control={control}
      rules={{
        required: { value: true, message: "入力必須です" },
      }}
      render={({ field }) => (
        <TextField
          {...field}
          autoFocus={true}
          autoComplete="postal-code"
          label="郵便番号"
          placeholder="1000001"
          type="text"
          inputMode="numeric" // 数字のキーボードを開く
          required={true} // *マークが入る // エラーメッセージは別箇所で指定する
          inputProps={{ maxLength: 7 }}
          onChange={(e) => {
            // 数値以外は入力できない
            const value = e.target.value;
            if (value === "" || onlyNumberRegex.test(value)) field.onChange(value);
          }}
          // エラー
          error={errors.postalCode !== undefined}
          helperText={errors.postalCode?.message}
        />
      )}
    />
  );
};
