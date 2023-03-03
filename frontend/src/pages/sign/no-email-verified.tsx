import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { useAuth } from "src/services/hooks/use-auth";
import * as React from "react";
import { Center } from "src/components/elements/center";
import { Space } from "src/components/elements/space";
import { useEffect, useState } from "react";
import { User } from "@firebase/auth";
import { useRouter } from "next/router";

// メール認証していないときにのみ表示するページ
export default function NoEmailVerified() {
  const { user, isUserLoading, sendVerifyEmail } = useAuth();
  const [isSendEmail, setIsSendEmail] = useState(false);
  const router = useRouter();
  const email = user?.email as string;

  useEffect(() => {
    (async () => {
      if (isUserLoading) return;
      if (isSendEmail) return;
      if (!user) return;
      if (user.emailVerified) return router.push("/");
      console.log("sendVerifyEmail");
      // await sendVerifyEmail(user);
      setIsSendEmail(true);
    })();
  }, [isUserLoading, user]);

  if (isUserLoading) return <CircularProgress />;
  return (
    <Stack>
      <Center>
        <Typography>{email}に認証メールを送信しました。 認証してください。</Typography>
      </Center>
      <Space height={3}></Space>
      <Button onClick={() => sendVerifyEmail(user as User)}>認証メールを再送する</Button>
    </Stack>
  );
}
