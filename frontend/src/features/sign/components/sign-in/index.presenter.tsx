import React from "react";
import { Container, Grid } from "@mui/material";
import { SizedBox } from "@common/components/ui/sized-box";
import { SignIcon } from "@features/sign/ui/sign-icon";
import { SignForm } from "@features/sign/ui/sign-from";
import { LinkText } from "@common/components/ui/text/link-text";
import { PASSWORD_FORGET_PAGE, SIGN_UP_PAGE } from "@common/configs/page-url";

interface Props {
  signIn: (email: string, password: string) => Promise<void>;
}
export const SignInPresenter = ({ signIn }: Props) => {
  const text = "ログイン";

  return (
    <Container maxWidth={"xs"}>
      <SizedBox height={8} />

      {/* ログインアイコン */}
      <SignIcon text={text}></SignIcon>

      {/* サインインフォーム */}
      <SignForm text={text} signIn={signIn} />

      {/* 下部のコンテンツ */}
      <Grid container>
        <Grid item xs>
          <LinkText text={"パスワードを忘れた場合"} pageUrl={PASSWORD_FORGET_PAGE} />
        </Grid>
        <Grid item>
          <LinkText text={"会員登録"} pageUrl={SIGN_UP_PAGE} />
        </Grid>
      </Grid>
      <SizedBox height={8} />
    </Container>
  );
};
