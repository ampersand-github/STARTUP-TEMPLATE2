import React from "react";
import Container from "@mui/material/Container";
import { SizedBox } from "@common/components/elements/space";
import { SignIcon } from "@common/../../../sign-icon";
import { theme } from "@common/configs/themes";
import { Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { IEmail } from "@features/sign/interfaces/email-interfeace";

interface Props {
  control: Control<IEmail>;
  errors: FieldErrors<IEmail>;
  handleSubmit: () => void;
}

export const PasswordForgetPresenter = ({ control, errors, handleSubmit }: Props) => {
  return (
    <Container maxWidth={"xs"}>
      <SizedBox height={8} />

      {/* ログインアイコン */}
      <SignIcon
        text={"パスワードの再設定"}
        color={theme.palette.common.white}
        backGroundColor={theme.palette.primary.main}
      ></SignIcon>

      {/* サインインフォーム */}
      <Stack component="form" noValidate onSubmit={handleSubmit} spacing={2}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              autoFocus
              autoComplete="email"
              label="emailを入力してください"
              placeholder="abc@gmail.com"
              type="text"
              required={true}
              error={errors.email !== undefined}
              helperText={errors.email?.message}
            />
          )}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          このアドレスに送信する
        </Button>
      </Stack>
    </Container>
  );
};
