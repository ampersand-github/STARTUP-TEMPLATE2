import React from "react";
import { Container, Grid } from "@mui/material";
import { SizedBox } from "@common/components/elements/space";
import { SignIcon } from "@features/sign/ui/sign-icon";
import { SignForm } from "@features/sign/ui/sign-from";
import { LinkText } from "@common/components/elements/text/link-text";
import { SIGN_IN_PAGE } from "@common/configs/url/page-url";

interface Props {
  signUp: (email: string, password: string) => Promise<void>;
}

export const SignUpPresenter = ({ signUp }: Props) => {
  const text = "会員登録";

  return (
    <Container maxWidth={"xs"}>
      <SizedBox height={8} />

      {/* ログインアイコン */}
      <SignIcon text={text}></SignIcon>

      {/* サインインフォーム */}
      <SignForm text={text} signUp={signUp} />

      <Grid container>
        <Grid item xs />
        <Grid item>
          <LinkText text={"ログイン"} pageUrl={SIGN_IN_PAGE} />
        </Grid>
      </Grid>
      <SizedBox height={8} />
    </Container>
  );
};
