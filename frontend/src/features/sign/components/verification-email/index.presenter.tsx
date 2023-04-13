import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { LinkText } from "@common/components/ui/text/link-text";
import { SizedBox } from "@common/components/ui/sized-box";
import { SIGN_NO_EMAIL_VERIFIED_PAGE } from "@common/configs/page-url";

interface Props {
  email: string;
  reSendVerifyEmail: () => Promise<void>;
  logout: () => Promise<void>;
}
export const VerificationMailPresenter = ({ email, reSendVerifyEmail, logout }: Props) => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Typography>{email}に認証メールを送信しました。</Typography>
      <Stack direction={"row"}>
        <Typography>認証したら</Typography>
        <LinkText pageUrl={SIGN_NO_EMAIL_VERIFIED_PAGE} text={"こちら"} />
        <Typography>をタップしてください。</Typography>
      </Stack>

      <SizedBox height={1}></SizedBox>
      <Button onClick={reSendVerifyEmail}>認証メールを再送する</Button>
      <SizedBox height={1}></SizedBox>
      <Button onClick={logout}>メールアドレスを誤ったので会員登録し直す</Button>
    </Stack>
  );
};
