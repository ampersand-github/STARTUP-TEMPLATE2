import * as React from "react";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { IUseAuth } from "src/services/hooks/use-auth";
import { Space } from 'src/components/elements/space';
import { PRACTICE_ANOTHER_LAYOUT, TOP_PAGE, WISE_SAYING_PAGE } from 'src/services/constraints/page-url';


export interface IMyDrawer {
  isOpen: boolean;
  toggle: () => void;
  user: IUseAuth["user"];
  logout: IUseAuth["logout"];
  black: string;
}

export const MyDrawer = ({ isOpen, toggle, user, logout }: IMyDrawer) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggle}>
      <Stack paddingLeft={2} paddingRight={2} sx={{ minWidth: 320 }}>
        <List>
          {/* メールアドレス */}
          {user && (
            <>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant={"h6"} fontWeight={"bold"}>
                  メールアドレス
                </Typography>
                <Typography variant={"body2"}>{user?.email}</Typography>
              </ListItem>
              <Divider />
            </>
          )}

          {/* 内部ページ */}
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
        </List>
        <Divider />

   <Space height={10}/>

        {user ? (
          <Button onClick={logout} variant={"contained"}>
            ログアウト
          </Button>
        ) : (
          <></>
        )}
      </Stack>
    </Drawer>
  );
};
