import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { Space } from "src/components/elements/space";
import { SignIcon } from "src/components/elements/sign/sign-icon";
import Grid from "@mui/material/Grid";
import { CopyRightText } from "src/components/elements/text/copy-right-text";
import * as React from "react";
import { LinkText } from "src/components/elements/text/link-text";
import { AMPERSAND_PAGE, SIGN_IN_PAGE } from "src/services/constraints/url/page-url";
import { SignFormContainer } from "src/components/organisms/sign/index.container";

export default function SignUp() {
  const theme = useTheme();
  const text = "会員登録";

  return (
    <Container maxWidth={"xs"}>
      <Space height={8} />

      {/* ログインアイコン */}
      <SignIcon
        text={text}
        color={theme.palette.common.white}
        backGroundColor={theme.palette.primary.main}
      ></SignIcon>

      {/* サインインフォーム */}
      <SignFormContainer text={text} signType={"sign-up"} />

      {/* 下部のコンテンツ */}
      <Grid container>
        <Grid item xs>
          <LinkText text={"パスワードを忘れた場合"} pageUrl={"#"} />
        </Grid>
        <Grid item>
          <LinkText text={"ログイン"} pageUrl={SIGN_IN_PAGE} />
        </Grid>
      </Grid>
      <Space height={8} />

      {/* コピーライト */}
      <CopyRightText pageUrl={AMPERSAND_PAGE} />
    </Container>
  );
}
