import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { Loading } from "@common/components/ui/loading";
import { useAuth } from "@features/sign";

type Props = { children: ReactNode };

export const WithNotAuth = ({ children }: Props): JSX.Element => {
  const { isUserLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (isUserLoading) return <Loading />;
      if (user === undefined) return <Loading />;
      if (user) await router.back();
    })();
  }, [user, isUserLoading]);

  if (isUserLoading) return <Loading />;
  return <>{children}</>;
};
