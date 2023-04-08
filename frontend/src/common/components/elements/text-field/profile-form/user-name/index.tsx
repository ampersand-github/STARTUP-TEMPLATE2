import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import React from "react";
import { IProfile } from "@features/profiles/interfaces/profile-interface";

export interface IUserNameTextField {
  control: Control<IProfile>;
  errors: FieldErrors<IProfile>;
}

export const UserNameTextField = ({ control, errors }: IUserNameTextField) => {
  return (
    <Controller
      name="userName"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          variant="standard"
          label="ユーザー名"
          placeholder={"山田太郎"}
          type="text"
          inputProps={{ maxLength: 30 }}
          multiline
          error={errors.userName !== undefined}
          helperText={errors.userName?.message}
        />
      )}
    />
  );
};
