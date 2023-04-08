import { IUseAuth } from "@common/hooks/use-auth";
import { Container, Grid } from "@mui/material";
import { SizedBox } from "@common/components/elements/space";
import { SignIcon } from "@common/components/elements/sign/sign-icon";
import { theme } from "@common/configs/themes";
import { SignForm } from "@common/components/organisms/sign";
import { CopyRightText } from "@common/components/elements/text/copy-right-text";
import { AMPERSAND_PAGE, PASSWORD_FORGET_PAGE, SIGN_UP_PAGE } from "@common/configs/url/page-url";
import { LinkText } from "@common/components/elements/text/link-text";

export interface ISignInTemplate {
  signIn: IUseAuth["signIn"];
}

export const SignInTemplate = ({ signIn }: ISignInTemplate): JSX.Element => {
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

      {/* コピーライト */}
      <CopyRightText pageUrl={AMPERSAND_PAGE} />
    </Container>
  );
};
