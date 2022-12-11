import * as React from "react";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import { IUseAuth } from "src/services/hooks/use-auth";
import { Space } from "src/components/elements/space";
import {
  API_PRACTICE_PAGE,
  PRACTICE_ANOTHER_LAYOUT,
  TOP_PAGE,
  WISE_SAYING_PAGE,
} from "src/services/constraints/url/page-url";
import { Center } from "src/components/elements/center";

export interface IMyDrawer {
  isOpen: boolean;
  toggle: () => void;
  user: IUseAuth["user"];
  logout: IUseAuth["logout"];
  black: string;
}

export const MyDrawer = ({ isOpen, toggle, user, logout }: IMyDrawer) => {
  const _ListSubheader = (text: string) => <ListSubheader>{text}</ListSubheader>;
  const _logout = (
    <Button onClick={logout} variant={"contained"}>
      ログアウト
    </Button>
  );

  return (
    <Drawer anchor="right" open={isOpen} onClose={toggle}>
      <Stack padding={2} spacing={3} sx={{ width: "100%", minWidth: 320 }}>
        {/* タイトル */}
        <Center>
          <Typography variant={"h6"} fontWeight={"bold"}></Typography>
        </Center>

        {/* メールアドレス */}
        {user && (
          <List subheader={_ListSubheader("メールアドレス")}>
            <ListItem sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Typography variant={"body2"}>{user?.email}</Typography>
            </ListItem>
            <Space height={2}></Space>
            <Divider />
          </List>
        )}

        {/* 内部ページ */}
        <List subheader={_ListSubheader("ページリンク")}>
          <ListItem>
            <ListItemButton component="a" href={TOP_PAGE}>
              <ListItemText primary="トップページ" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href={WISE_SAYING_PAGE}>
              <ListItemText primary="名言" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href={PRACTICE_ANOTHER_LAYOUT}>
              <ListItemText primary="レイアウトが違うページ" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href={API_PRACTICE_PAGE}>
              <ListItemText primary="API動作確認" />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>

        {/* ログアウト */}
        {user ? _logout : <></>}
      </Stack>
    </Drawer>
  );
};
