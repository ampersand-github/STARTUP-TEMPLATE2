import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import React from "react";
import { IProfile } from "@/components/organisms/profile-form";

export interface IProfileTextField {
  control: Control<IProfile>;
  errors: FieldErrors<IProfile>;
}

export const ProfileTextField = ({ control, errors }: IProfileTextField) => {
  return (
    <Controller
      name="profile"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="プロフィール"
          placeholder={"プロフィールを記入してください"}
          type="text"
          minRows={4}
          inputProps={{ maxLength: 400 }}
          multiline
          error={errors.profile !== undefined}
          helperText={errors.profile?.message}
        />
      )}
    />
  );
};
