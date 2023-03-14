import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEnqueueSnackbar } from "@/services/hooks/use-enqueue-snackbar";
import { resetPassword } from "@/services/lib/auth/reset-password";
import { PasswordForgetTemplate } from "@/components/templates/sign/password-forget-template";

const PasswordForget: NextPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { snackbar } = useEnqueueSnackbar();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await resetPassword(email);
    if (result.isOk) {
      snackbar({ message: "メールを送信しました", variant: "success" });
      router.back();
    }
    if (!result.isOk) snackbar({ message: result.message || "", variant: "error" });
  };

  return (
    <PasswordForgetTemplate back={router.back} setEmail={setEmail} handleSubmit={handleSubmit} />
  );
};
export default PasswordForget;
