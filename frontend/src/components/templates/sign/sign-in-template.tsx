import { LinkText } from "@/components/elements/text/link-text";
import { SizedBox } from "@/components/elements/space";
import * as React from "react";
import { IAuth, IUseAuth } from "@/services/hooks/use-auth";
import Container from "@mui/material/Container";
import { SignIcon } from "@/components/elements/sign/sign-icon";
import { SignForm } from "@/components/organisms/sign";
import Grid from "@mui/material/Grid";
import {
  AMPERSAND_PAGE,
  PASSWORD_FORGET_PAGE,
  SIGN_UP_PAGE,
} from "@/services/constraints/url/page-url";
import { CopyRightText } from "@/components/elements/text/copy-right-text";
import { theme } from "@/services/constraints/themes";

export interface ISignInTemplate {
  user: IAuth;
  signIn: IUseAuth["signIn"];
}

export const SignInTemplate = ({ user, signIn }: ISignInTemplate): JSX.Element => {
  const text = "ログイン";

  return (
    <Container maxWidth={"xs"}>
      <SizedBox height={8} />

      {/* ログインアイコン */}
      <SignIcon
        text={text}
        color={theme.palette.common.white}
        backGroundColor={theme.palette.primary.main}
      ></SignIcon>

      {/* サインインフォーム */}
      <SignForm text={text} user={user} signIn={signIn} />

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

      {/* コピーライト */}
      <CopyRightText pageUrl={AMPERSAND_PAGE} />
    </Container>
  );
};
