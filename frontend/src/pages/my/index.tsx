import * as React from "react";
import { useAuth } from "src/common/hooks/use-auth";
import { GetServerSideProps, NextPage } from "next";
import { MyTemplate } from "src/common/components/templates/my/my-template";
import { withAuth } from "src/common/hoc/with-auth";

interface IMy {
  props: { token: string };
}

const My: NextPage<IMy> = () => {
  const { user, logout } = useAuth();

  return <MyTemplate email={user?.email ? user.email : "loading..."} logout={logout} />;
};

export const getServerSideProps: GetServerSideProps = withAuth(async (context) => {
  const token = context.req.cookies.token || "";
  return {
    props: { token: token },
  };
});

export default My;
