import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { useAuth } from "src/services/hooks/use-auth";
import * as React from "react";
import { Space } from "src/components/elements/space";
import { useEffect, useState } from "react";
import { User } from "@firebase/auth";
import { useRouter } from "next/router";
import { LinkText } from "@/components/elements/text/link-text";

// メール認証していないときにのみ表示するページ
export default function NoEmailVerified() {
  const { user, isUserLoading, sendVerifyEmail, logout, refreshIdToken } = useAuth();
  const router = useRouter();
  const email = user?.email as string;
  const [isSendEmail, setIsSendEmail] = useState(false);

  useEffect(() => {
    (async () => {
      if (isUserLoading || isSendEmail || !user) return;
      if (user.emailVerified) {
        await refreshIdToken(user); // メール認証後にトークンを更新しないとクッキーのほうがずっとuser.emailVerifiedがfalseのままなため
        return router.push("/");
      }
      if (!isSendEmail) await sendVerifyEmail(user);
      setIsSendEmail(true);
    })();
  }, [isUserLoading, user]);

  if (isUserLoading) return <CircularProgress />;
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Typography>{email}に認証メールを送信しました。</Typography>
      <Stack direction={"row"}>
        <Typography>認証したら</Typography>
        <LinkText pageUrl={"/"} text={"こちら"} />
        <Typography>をタップしてください。</Typography>
      </Stack>
      <Space height={1}></Space>
      <Button onClick={() => sendVerifyEmail(user as User)}>認証メールを再送する</Button>
      <Space height={1}></Space>
      <Button onClick={logout}>メールアドレスを誤ったので会員登録し直す</Button>
    </Stack>
  );
}
