import { Badge, Button, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { Suspense, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { IProfile } from "@features/profiles/interfaces/profile-interface";
import { UserNameTextField } from "@common/components/elements/text-field/profile-form/user-name";
import { ProfileTextField } from "@common/components/elements/text-field/profile-form/profile";
import { SizedBox } from "@common/components/elements/space";
import { MottoTextField } from "@common/components/elements/text-field/profile-form/motto";
import { useAvatarHandler } from "src/common/hooks/use-avatar-handler";

export interface IProfileForm {
  profile: IProfile;
  onSubmit: (data: IProfile) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isAvatarLoading: boolean;
}

export const ProfileForm = ({
  profile,
  onImageUpload,
  onSubmit,
  isAvatarLoading,
}: IProfileForm) => {
  const defaultValues = useMemo(() => ({ defaultValues: profile }), [profile]);
  useEffect(() => reset(profile), [defaultValues]);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProfile>(defaultValues);

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} direction="row" alignItems="center">
        {!isAvatarLoading && (
          <AvatarImageEditor imageSrc={profile.iconPath} handleUpload={onImageUpload} />
        )}
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

// todo 後で別ファイルに切り出す

export interface IAvatarImageEditor {
  imageSrc: string;
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const AvatarImageEditor = ({ handleUpload }: IAvatarImageEditor) => {
  const { avatarImageUrl } = useAvatarHandler();

  return (
    <Suspense fallback={<>loading...</>}>
      <Button component="label">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={<EditIcon sx={{ width: 32, height: 32, color: "black", opacity: 0.6 }} />}
        >
          <Image
            src={avatarImageUrl}
            style={{ borderRadius: "50%" }}
            alt="avatar"
            width={80}
            height={80}
          />
        </Badge>
        <input hidden accept="image/*" multiple type="file" onChange={handleUpload} />
      </Button>
    </Suspense>
  );
};
