import { Avatar, Badge, Button, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { SizedBox } from "@/components/elements/space";
import React from "react";
import { useForm } from "react-hook-form";
import { MottoTextField } from "@/components/elements/text-field/profile-form/motto";
import { ProfileTextField } from "@/components/elements/text-field/profile-form/profile";
import { UserNameTextField } from "@/components/elements/text-field/profile-form/user-name";

export interface IProfile {
  iconPath: string;
  userName: string;
  motto: string;
  profile: string;
}

export interface IProfileForm {
  profile?: IProfile;
}

export const ProfileForm = ({ profile }: IProfileForm) => {
  const {
    control,
    formState: { errors },
  } = useForm<IProfile>();

  const url = "https://t.pimg.jp/080/791/225/1/80791225.jpg";
  const onUpload = () => {
    console.log("onUpload");
  };
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
          <UserNameTextField errors={errors} control={control} />
          <MottoTextField errors={errors} control={control} />
        </Stack>
      </Stack>
      <SizedBox height={2} />
      <ProfileTextField errors={errors} control={control} />
      <SizedBox height={4} />
      <Button variant="contained" type="submit">
        送信する
      </Button>
    </Stack>
  );
};
