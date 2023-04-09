import { Control, Controller, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import React from "react";
import { IProfile } from "@features/profiles/interfaces/profile-interface";

export interface IMottoTextField {
  control: Control<IProfile>;
  errors: FieldErrors<IProfile>;
}

export const MottoTextField = ({ control, errors }: IMottoTextField) => {
  return (
    <Controller
      name="motto"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          variant="standard"
          label="座右の銘"
          placeholder={"芸人末路哀れは覚悟の前"}
          type="text"
          inputProps={{ maxLength: 60 }}
          multiline
          error={errors.motto !== undefined}
          helperText={errors.motto?.message}
        />
      )}
    />
  );
};
