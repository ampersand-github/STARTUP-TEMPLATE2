import { Button, Container, Divider, List, Stack, Typography } from "@mui/material";
import * as React from "react";
import { IUseAuth } from "@common/hooks/use-auth";
import {
  ADDRESS_PAGE,
  ANOTHER_PAGE,
  API_PRACTICE_PAGE,
  PROFILE_PAGE,
  TOP_PAGE,
} from "@common/configs/url/page-url";
import { CustomListItem } from "@common/components/elements/custom-list-item";
import { Center } from "@common/components/elements/center";

export interface IMyTemplate {
  email: string;
  logout: IUseAuth["logout"];
}

export const MyTemplate = ({ email, logout }: IMyTemplate): JSX.Element => {
  const _ListSubheader = (text: string) => (
    <Typography color={"primary"} variant={"subtitle1"} fontWeight={"bold"}>
      {text}
    </Typography>
  );

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
        <List subheader={_ListSubheader("アカウント")}>
          <CustomListItem text={email} href={TOP_PAGE} />
          <CustomListItem text={"プロフィール"} href={PROFILE_PAGE} />
          <CustomListItem text={"住所"} href={ADDRESS_PAGE} />
          <Divider />
        </List>

        {/* 内部ページ */}
        <List subheader={_ListSubheader("ページリンク")}>
          <CustomListItem text={"トップページ"} href={TOP_PAGE} />
          <CustomListItem text={"レイアウトが違うページ"} href={ANOTHER_PAGE} />
          <CustomListItem text={"API動作確認"} href={API_PRACTICE_PAGE} />
          <Divider />
        </List>

        {/* ログアウト */}
        <Button onClick={logout} variant={"contained"}>
          ログアウト
        </Button>
      </Stack>
    </Container>
  );
};
