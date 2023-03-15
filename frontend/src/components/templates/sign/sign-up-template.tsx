import { LinkText } from "@/components/elements/text/link-text";
import { SizedBox } from "@/components/elements/space";
import * as React from "react";
import { IUseAuth } from "@/services/hooks/use-auth";
import Container from "@mui/material/Container";
import { SignIcon } from "@/components/elements/sign/sign-icon";
import { SignForm } from "@/components/organisms/sign";
import Grid from "@mui/material/Grid";
import { AMPERSAND_PAGE, SIGN_IN_PAGE } from "@/services/constraints/url/page-url";
import { CopyRightText } from "@/components/elements/text/copy-right-text";
import { theme } from "@/services/constraints/themes";

export interface ISignUpTemplate {
  signUp: IUseAuth["signUp"];
}

export const SignUpTemplate = ({ signUp }: ISignUpTemplate): JSX.Element => {
  const text = "会員登録";

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
      <SignForm text={text} signUp={signUp} />

      <Grid container>
        <Grid item xs />
        <Grid item>
          <LinkText text={"ログイン"} pageUrl={SIGN_IN_PAGE} />
        </Grid>
      </Grid>
      <SizedBox height={8} />

      {/* コピーライト */}
      <CopyRightText pageUrl={AMPERSAND_PAGE} />
    </Container>
  );
};
