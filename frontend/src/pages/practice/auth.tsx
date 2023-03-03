import { Stack, Typography } from "@mui/material";
import { useAuth } from "@/services/hooks/use-auth";
import { GetServerSideProps, NextPage } from "next";
import { withAuth } from "@/services/hoc/with-auth";

const auth: NextPage = () => {
  const { user } = useAuth();
  return (
    <Stack>
      <Typography>SSRの認証の動作確認の動作確認</Typography>
      <p>Your email is {user ? user.email : "unknown"}.</p>
    </Stack>
  );
};

export const getServerSideProps: GetServerSideProps = withAuth();

export default auth;
