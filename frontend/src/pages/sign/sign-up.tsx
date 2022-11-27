import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { Space } from "src/components/elements/space";
import { SignIcon } from "src/components/elements/sign/sign-icon";
import Grid from "@mui/material/Grid";
import { CopyRightText } from "src/components/elements/copy-right-text";
import * as React from "react";
import { SignForm } from "src/components/organisms/sign";
import { LinkText } from "src/components/elements/link-text";
import { SIGN_IN_PAGE } from "src/services/constraints/page-url";

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
      <SignForm text={text} />

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
      <CopyRightText />
    </Container>
  );
}
