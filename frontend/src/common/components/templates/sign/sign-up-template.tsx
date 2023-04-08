import { IUseAuth } from "@common/hooks/use-auth";
import { Container, Grid } from "@mui/material";
import { SignIcon } from "@common/components/elements/sign/sign-icon";
import React from "react";
import { CopyRightText } from "@common/components/elements/text/copy-right-text";
import { SizedBox } from "@common/components/elements/space";
import { LinkText } from "@common/components/elements/text/link-text";
import { SignForm } from "@common/components/organisms/sign";
import { theme } from "@common/configs/themes";
import { AMPERSAND_PAGE, SIGN_IN_PAGE } from "@common/configs/url/page-url";

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
