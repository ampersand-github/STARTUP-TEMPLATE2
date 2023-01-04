import { Avatar, Badge, Button, Stack, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Space } from "@/components/elements/space";
import React from "react";
import { useForm } from "react-hook-form";

export interface IProfile {
  iconPath: string;
}

export interface IProfileForm {
  profile?: IProfile;
}

export const ProfileForm = ({ profile }: IProfileForm) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<IProfile>();

  const url = "https://t.pimg.jp/080/791/225/1/80791225.jpg";
  const onUpload = () => {};
  return (
    <Stack>
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
};
