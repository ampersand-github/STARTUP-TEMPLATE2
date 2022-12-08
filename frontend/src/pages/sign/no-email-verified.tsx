import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { useAuth } from "src/services/hooks/use-auth";
import * as React from "react";
import { useRouter } from "next/router";
import { Center } from "src/components/elements/center";
import { Space } from "src/components/elements/space";

export default function NoEmailVerified() {
  const { user, isUserLoading, emailVerified } = useAuth();
  const router = useRouter();
  const email = user?.email as string;
  const handleClick = () => emailVerified(user);

  // メール認証していないときにのみ表示するページ
  if (isUserLoading) return <CircularProgress />;
  if (user && user.emailVerified) return router.push("/");

  return (
    <Stack>
      <Center>
        <Typography>
          {email}に認証メールを送信しました。 認証してください。
        </Typography>
      </Center>
      <Space height={3}></Space>
      <Button onClick={handleClick}>認証メールを再送する</Button>
    </Stack>
  );
}
