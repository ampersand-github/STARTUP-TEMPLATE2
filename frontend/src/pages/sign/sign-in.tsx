import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Space } from "src/components/elements/space";
import { CopyRightText } from "src/components/elements/copy-right-text";
import { SignIcon } from "src/components/elements/sign/sign-icon";
import { useTheme } from "@mui/material";
import { SignForm } from "src/components/organisms/sign";
import { LinkText } from "src/components/elements/link-text";
import { SIGN_UP_PAGE } from "src/services/constraints/page-url";

export default function SignIn() {
  const theme = useTheme();
  const text = "ログイン";
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
      <SignForm text={text}></SignForm>

      {/* 下部のコンテンツ */}
      <Grid container>
        <Grid item xs>
          <LinkText text={"パスワードを忘れた場合"} pageUrl={"#"} />
        </Grid>
        <Grid item>
          <LinkText text={"会員登録"} pageUrl={SIGN_UP_PAGE} />
        </Grid>
      </Grid>
      <Space height={8} />

      {/* コピーライト */}
      <CopyRightText />
    </Container>
  );
}
