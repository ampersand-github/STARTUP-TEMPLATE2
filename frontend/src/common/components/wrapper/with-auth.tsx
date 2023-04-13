import { SIGN_IN_PAGE, SIGN_NO_EMAIL_VERIFIED_PAGE } from "@common/configs/page-url";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { useAuth } from "@features/sign";

type Props = { children: ReactNode };

export const WithAuth = ({ children }: Props): JSX.Element => {
  const { user, isUserLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (isUserLoading || user === undefined) return <></>;
      if (user === null) return await router.push(SIGN_IN_PAGE);
      if (!user.emailVerified) return await router.push(SIGN_NO_EMAIL_VERIFIED_PAGE);
    })();
  }, [user, isUserLoading]);

  return user?.emailVerified ? <>{children}</> : <></>;
};
