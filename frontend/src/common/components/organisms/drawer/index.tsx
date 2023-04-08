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
import { IUseAuth } from "@common/hooks/use-auth";
import { SizedBox } from "@common/components/elements/space";
import { ANOTHER_PAGE, API_PRACTICE_PAGE, TOP_PAGE } from "@common/configs/url/page-url";
import { Center } from "@common/components/elements/center";

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
            <SizedBox height={2}></SizedBox>
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
            <ListItemButton component="a" href={ANOTHER_PAGE}>
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
