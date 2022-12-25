import {
  Button,
  CircularProgress,
  Container,
  Divider,
  List,
  Stack,
  Typography,
} from "@mui/material";
import { Center } from "src/components/elements/center";
import {
  ADDRESS_PAGE,
  ANOTHER_PAGE,
  API_PRACTICE_PAGE,
  BACKEND_PRACTICE_PAGE,
  PROFILE_PAGE,
  TOP_PAGE,
  WISE_SAYING_PAGE,
} from "src/services/constraints/url/page-url";
import * as React from "react";
import { useAuth } from "src/services/hooks/use-auth";
import { CustomListItem } from "src/components/elements/custom-list-item";

export default function My() {
  const { user, logout, isUserLoading } = useAuth();
  const _ListSubheader = (text: string) => (
    <Typography color={"primary"} variant={"subtitle1"} fontWeight={"bold"}>
      {text}
    </Typography>
  );

  const _logout = (
    <Button onClick={logout} variant={"contained"}>
      ログアウト
    </Button>
  );

  if (isUserLoading) return <CircularProgress />;

  return (
    <Container sx={{ maxWidth: 640 }}>
      <Stack padding={2} spacing={3} sx={{ width: "100%", minWidth: 320 }}>
        {/* タイトル */}
        <Center>
          <Typography variant={"h6"} fontWeight={"bold"}>
            各種設定
          </Typography>
        </Center>

        {/* 内部ページ */}
        {user && (
          <List subheader={_ListSubheader("アカウント")}>
            <CustomListItem text={user.email as string} href={TOP_PAGE} />
            <CustomListItem text={"プロフィール"} href={PROFILE_PAGE} />
            <CustomListItem text={"住所"} href={ADDRESS_PAGE} />
            <Divider />
          </List>
        )}

        {/* 内部ページ */}
        <List subheader={_ListSubheader("ページリンク")}>
          <CustomListItem text={"トップページ"} href={TOP_PAGE} />
          <CustomListItem text={"名言"} href={WISE_SAYING_PAGE} />
          <CustomListItem text={"レイアウトが違うページ"} href={ANOTHER_PAGE} />
          <CustomListItem text={"API動作確認"} href={API_PRACTICE_PAGE} />
          <CustomListItem text={"バックエンド動作確認"} href={BACKEND_PRACTICE_PAGE} />
          <Divider />
        </List>

        {/* ログアウト */}
        {user ? _logout : <></>}
      </Stack>
    </Container>
  );
}
