import { SIGN_IN_PAGE } from "@common/configs/url/page-url";
import { useAuth } from "@common/hooks/use-auth";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { Loading } from "src/common/components/organisms/loading";

type Props = { children: ReactNode };

export const WithAuth = ({ children }: Props): JSX.Element => {
  const { isUserLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (isUserLoading) return <Loading />;
      if (user === undefined) return <Loading />;
      if (user === null) await router.push(SIGN_IN_PAGE);
    })();
  }, [user, isUserLoading]);

  // todo メールアドレス認証などはあとで実装する

  if (isUserLoading) return <Loading />;
  return <>{children}</>;
};