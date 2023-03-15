import * as React from "react";
import { useAuth } from "src/services/hooks/use-auth";
import { GetServerSideProps, NextPage } from "next";
import { withAuth } from "@/services/hoc/with-auth";
import { MyTemplate } from "@/components/templates/my/my-template";

interface IMy {
  props: { token: string };
}

const My: NextPage<IMy> = (props: IMy) => {
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
