import {
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  CircularProgress,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "src/services/hooks/use-auth";
import EditIcon from "@mui/icons-material/Edit";
import { MY_PAGE } from "@/services/constraints/url/page-url";
import { Space } from "@/components/elements/space";
import React, { ChangeEvent, useState } from 'react';

export default function Profile() {
  const { isUserLoading } = useAuth();
  const url = "https://t.pimg.jp/080/791/225/1/80791225.jpg";
  const [image, setImage] = useState<File>();

  const onUpload = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      console.log(image)
      // todo リサイズ処理？？？
      // todo 画像アップロード処理
    }
  };

  if (isUserLoading) return <CircularProgress />;

  return (
    <Stack>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          トップ
        </Link>
        <Link color="inherit" href={MY_PAGE}>
          各種設定
        </Link>
        <Typography color="textPrimary">プロフィール設定</Typography>
      </Breadcrumbs>
      <Space height={6} />
      <Typography variant={"h6"} fontWeight={"bold"} sx={{ opacity: 0.8 }}>
        プロフィール設定
      </Typography>
      <Space height={3} />

      <Stack spacing={3} direction="row" alignItems="center">
        <Button component="label">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={<EditIcon sx={{ width: 32, height: 32, color: "black", opacity: 0.6 }} />}
          >
            <Avatar alt="avatar" src={url} sx={{ width: 80, height: 80 }} />
          </Badge>
          <input hidden accept="image/*" multiple type="file" onChange={onUpload} />
        </Button>
        <Stack spacing={0.5} justifyContent="center" alignItems="flex-start" flexGrow={1}>
          <TextField
            fullWidth
            variant="standard"
            label="ユーザー名"
            placeholder={"山田太郎"}
            type="text"
            inputProps={{ maxLength: 30 }}
            multiline
          ></TextField>

          <TextField
            fullWidth
            variant="standard"
            label="座右の銘"
            placeholder={"芸人末路哀れは覚悟の前"}
            type="text"
            inputProps={{ maxLength: 60 }}
            multiline
          ></TextField>
        </Stack>
      </Stack>
      <Space height={2} />
      <TextField
        placeholder={"プロフィールを記入してください"}
        multiline
        minRows={4}
        inputProps={{ maxLength: 400 }}
      ></TextField>
      <Space height={4} />
      <Button variant="contained" type="submit">
        送信する
      </Button>
    </Stack>
  );
}
