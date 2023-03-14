import { CircularProgress } from "@mui/material";
import * as React from "react";
import { useAuth } from "src/services/hooks/use-auth";
import { GetServerSideProps, NextPage } from "next";
import { withAuth } from "@/services/hoc/with-auth";
import { MyTemplate } from "@/components/templates/my/my-template";

interface IMy {
  props: { token: string };
}

const My: NextPage<IMy> = (props: IMy) => {
  const { user, isUserLoading, logout } = useAuth();
  const token = props.props.token;
  console.log(token);

  if (isUserLoading) return <CircularProgress />;

  return user ? <MyTemplate user={user} logout={logout} /> : <></>;
};

export const getServerSideProps: GetServerSideProps = withAuth(async (context) => {
  const token = context.req.cookies.token || "";
  // TODO アカウントをDBから引っ張る？
  return {
    props: { token: token },
  };
});

export default My;
