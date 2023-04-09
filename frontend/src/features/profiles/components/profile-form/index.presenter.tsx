import { Button, Stack } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { IProfile } from "@features/profiles/interfaces/profile-interface";
import { SizedBox } from "src/common/components/elements/space";
import { ProfileTextField } from "@features/profiles/components/profile-form/ui/profile-text-field";
import { UserNameTextField } from "@features/profiles/components/profile-form/ui/user-name-text-field";
import { MottoTextField } from "./ui/motto-text-field";
import { AvatarEditor } from "./ui/avatar-editer";
import { initialProfileValue } from "@features/profiles/initial-values/initial-profile-value";

interface Props {
  imageUrl: string;
  profile?: IProfile;
  onAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  onSubmit: (data: IProfile) => Promise<void>;
}

export const ProfileFormPresenter = ({ imageUrl, profile, onAvatarChange, onSubmit }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfile>({
    defaultValues: profile || initialProfileValue,
  });

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} direction="row" alignItems="center">
        <AvatarEditor imageUrl={imageUrl} handleChange={onAvatarChange} />
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
