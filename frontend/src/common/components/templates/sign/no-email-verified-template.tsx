import * as React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { SizedBox } from "@common/components/elements/space";
import { LinkText } from "@common/components/elements/text/link-text";
import { IUseAuth } from "@common/hooks/use-auth";

export interface INoEmailVerified {
  email: string;
  sendVerifyEmail: () => void;
  logout: IUseAuth["logout"];
}

export const NoEmailVerifiedTemplate = ({
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
      <Button onClick={sendVerifyEmail}>認証メールを再送する</Button>
      <SizedBox height={1}></SizedBox>
      <Button onClick={logout}>メールアドレスを誤ったので会員登録し直す</Button>
    </Stack>
  );
};
