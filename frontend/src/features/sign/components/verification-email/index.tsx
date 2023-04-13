import React, { useEffect, useState } from "react";
import { VerificationMailPresenter } from "@features/sign/components/verification-email/index.presenter";
import { useAuth } from "@features/sign/hooks/use-auth";
import { useRouter } from "next/router";
import { SIGN_IN_PAGE } from "@common/configs/page-url";
import { toast } from "react-toastify";
export const VerificationEmailContainer = () => {
  const { user, isUserLoading, signOut, sendEmailVerification } = useAuth();
  const router = useRouter();
  const [isSendEmail, setIsSendEmail] = useState(false);

  useEffect(() => {
    (async () => {
      // FirebaseError: Firebase: Error (auth/too-many-requests).対策
      if (isSendEmail) return;

      // ローディング中の場合
      if (isUserLoading || user === undefined) return;

      // 未ログインの場合
      if (user === null) {
        await router.push(SIGN_IN_PAGE);
        return;
      }

      // メール認証済みの場合
      if (user.emailVerified) {
        await router.push("/");
        toast.success("メールの認証が成功しました");
        return;
      }

      // メール未認証の場合
      setIsSendEmail(true);
      await sendEmailVerification();
      return;
    })();
  }, [user, isUserLoading]);

  return (
    <VerificationMailPresenter
      email={user?.email || ""}
      reSendVerifyEmail={sendEmailVerification}
      logout={signOut}
    />
  );
};
