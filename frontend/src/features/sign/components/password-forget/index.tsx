import React from "react";
import { PasswordForgetPresenter } from "@features/sign/components/password-forget/index.presenter";
import { useForm } from "react-hook-form";
import { IEmail } from "@features/sign/interfaces/email-interfeace";
import { useRouter } from "next/router";
import { resetPassword } from "@features/sign/hooks/functions/reset-password";
import { toast } from "react-toastify";
import { SIGN_IN_PAGE } from "@common/configs/page-url";

export const PasswordForgetContainer = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmail>();

  const onSubmit = async (data: IEmail) => {
    const result = await resetPassword(data.email);
    if (result.isOk) {
      toast.success("メールを送信しました");
      await router.push(SIGN_IN_PAGE);
    }
    if (!result.isOk) toast.error(result.value || "");
  };

  return (
    <PasswordForgetPresenter
      control={control}
      errors={errors}
      handleSubmit={handleSubmit(onSubmit)}
    />
  );
};
