import { Button, Stack, Typography } from "@mui/material";
import { LinkText } from "@/components/elements/text/link-text";
import { SizedBox } from "@/components/elements/space";
import { User } from "@firebase/auth";
import * as React from "react";
import { IUseAuth } from "@/services/hooks/use-auth";

export interface INoEmailVerified {
  user: User;
  email: string;
  sendVerifyEmail: IUseAuth["sendVerifyEmail"];
  logout: IUseAuth["logout"];
}

export const NoEmailVerifiedTemplate = ({
  user,
  email,
  sendVerifyEmail,
  logout,
}: INoEmailVerified): JSX.Element => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Typography>{email}に認証メールを送信しました。</Typography>
      <Stack direction={"row"}>
        <Typography>認証したら</Typography>
        <LinkText pageUrl={"/"} text={"こちら"} />
        <Typography>をタップしてください。</Typography>
      </Stack>
      <SizedBox height={1}></SizedBox>
      <Button onClick={() => sendVerifyEmail(user)}>認証メールを再送する</Button>
      <SizedBox height={1}></SizedBox>
      <Button onClick={logout}>メールアドレスを誤ったので会員登録し直す</Button>
    </Stack>
  );
};
