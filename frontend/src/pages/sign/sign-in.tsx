import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Space } from "src/components/elements/space";
import { CopyRightText } from "src/components/elements/text/copy-right-text";
import { SignIcon } from "src/components/elements/sign/sign-icon";
import { useTheme } from "@mui/material";
import { LinkText } from "src/components/elements/text/link-text";
import { AMPERSAND_PAGE, SIGN_UP_PAGE } from "src/services/constraints/url/page-url";
import { NextPage } from "next";
import { useAuth } from "@/services/hooks/use-auth";
import { useRouter } from "next/router";
import { SignForm } from "@/components/organisms/sign";

const SignIn: NextPage = () => {
  const { user, signIn } = useAuth();
  const router = useRouter();
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
      <SignForm text={text} user={user} router={router} signIn={signIn} />

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
      <CopyRightText pageUrl={AMPERSAND_PAGE} />
    </Container>
  );
};

export default SignIn;
