import * as React from "react";
import { NextPage } from "next";
import { Button, Container, Divider, List, Stack, Typography } from "@mui/material";
import { Center } from "@common/components/ui/center";
import { CustomListItem } from "@common/components/ui/custom-list-item";
import { ADDRESS_PAGE, ANOTHER_PAGE, PROFILE_PAGE, TOP_PAGE } from "@common/configs/page-url";
import { WithAuth } from "@common/components/wrapper/with-auth";
import { useAuth } from "@features/sign";

const My: NextPage = () => {
  const { user, signOut } = useAuth();
  const _ListSubheader = (text: string) => (
    <Typography color={"primary"} variant={"subtitle1"} fontWeight={"bold"}>
      {text}
    </Typography>
  );

  return (
    <WithAuth>
      <Container sx={{ maxWidth: 640 }}>
        <Stack padding={2} spacing={3} sx={{ width: "100%", minWidth: 320 }}>
          {/* タイトル */}
          <Center>
            <Typography variant={"h6"} fontWeight={"bold"}>
              各種設定
            </Typography>
          </Center>

          {/* 内部ページ */}
          <List subheader={_ListSubheader("アカウント")}>
            <CustomListItem text={user?.email ?? "loading..."} href={TOP_PAGE} />
            <CustomListItem text={"プロフィール"} href={PROFILE_PAGE} />
            <CustomListItem text={"住所"} href={ADDRESS_PAGE} />
            <Divider />
          </List>

          {/* 内部ページ */}
          <List subheader={_ListSubheader("ページリンク")}>
            <CustomListItem text={"トップページ"} href={TOP_PAGE} />
            <CustomListItem text={"レイアウトが違うページ"} href={ANOTHER_PAGE} />
            <Divider />
          </List>

          {/* ログアウト */}
          <Button onClick={signOut} variant={"contained"}>
            ログアウト
          </Button>
        </Stack>
      </Container>
    </WithAuth>
  );
};
export default My;
