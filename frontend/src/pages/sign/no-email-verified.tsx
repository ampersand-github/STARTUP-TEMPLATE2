import { CircularProgress } from "@mui/material";
import { useAuth } from "src/common/hooks/use-auth";
import * as React from "react";
import { useEffect, useState } from "react";
import { User } from "@firebase/auth";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { NoEmailVerifiedTemplate } from "@/components/templates/sign/no-email-verified-template";

// メール認証していないときにのみ表示するページ
const NoEmailVerified: NextPage = () => {
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
    <NoEmailVerifiedTemplate
      email={email}
      sendVerifyEmail={() => sendVerifyEmail(user as User)}
      logout={logout}
    />
  );
};
export default NoEmailVerified;
