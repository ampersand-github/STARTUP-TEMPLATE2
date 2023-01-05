import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Space } from "src/components/elements/space";
import { CopyRightText } from "src/components/elements/text/copy-right-text";
import { SignIcon } from "src/components/elements/sign/sign-icon";
import { useTheme } from "@mui/material";
import { LinkText } from "src/components/elements/text/link-text";
import {
  AMPERSAND_PAGE,
  SIGN_IN_PAGE,
  SIGN_NO_EMAIL_VERIFIED_PAGE,
  SIGN_UP_PAGE,
} from "src/services/constraints/url/page-url";
import { GetServerSideProps } from "next";
import nookies from "nookies";
import axios from "axios";
import { axiosConfig } from "@/services/configs/axios-config";
import { useAuth } from "@/services/hooks/use-auth";
import { useRouter } from "next/router";
import { SignForm } from "@/components/organisms/sign";

export default function SignIn() {
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
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  // APIやDBからのデータ取得処理などを記載
  console.log("getServerSideProps");
  const cookies = nookies.get(context);
  const session = cookies.session || null;
  // console.log(session);

  return await redirector(session);

  return { props: {} };
};

const redirector = async (idToken: string | null) => {
  let destination = "/";

  // tokenがない場合はログインページ
  if (!idToken) destination = SIGN_IN_PAGE;

  const verifiedResult = await axios.post("/auth", { idToken: idToken }, await axiosConfig());

  if (!verifiedResult.data.isVerify) destination = SIGN_IN_PAGE;
  if (!verifiedResult.data.isEmailVerified) destination = SIGN_NO_EMAIL_VERIFIED_PAGE;

  console.log("destination", destination);
  return {
    redirect: {
      permanent: false, // 永続的なリダイレクトかどうか
      destination: destination, // リダイレクト先
    },
  };
};
