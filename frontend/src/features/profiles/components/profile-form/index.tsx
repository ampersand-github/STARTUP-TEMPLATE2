import { Button, Stack } from "@mui/material";
import React, { Suspense } from "react";
import { useForm } from "react-hook-form";
import { IProfile } from "@features/profiles/interfaces/profile-interface";
import { initialProfileValue } from "src/features/profiles/initial-values/initial-profile-value";
import { ProfileTextField } from "src/common/components/elements/text-field/profile-form/profile";
import { SizedBox } from "src/common/components/elements/space";
import { MottoTextField } from "src/common/components/elements/text-field/profile-form/motto";
import { UserNameTextField } from "src/common/components/elements/text-field/profile-form/user-name";
import { saveProfile } from "@features/profiles/api/save-profile";
import { useFetchProfileResult } from "@features/profiles/api/get-profile-result";
import { AvatarEditor } from "@features/profiles/components/avatar-editer";

export const ProfileFormV2 = () => {
  const { profileResult } = useFetchProfileResult();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfile>({
    defaultValues:
      profileResult && profileResult.isOk && profileResult.value
        ? {
            iconPath: profileResult.value.iconPath,
            motto: profileResult.value.motto,
            userName: profileResult.value.nickname,
            profile: profileResult.value.profileText,
          }
        : initialProfileValue,
  });
  const onSubmit = saveProfile;
  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <>{JSON.stringify(profileResult)}</>
      <Stack spacing={3} direction="row" alignItems="center">
        <Suspense fallback={<>loading</>}>
          <AvatarEditor />
        </Suspense>
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
