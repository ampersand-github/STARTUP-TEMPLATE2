import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { SIGN_IN_PAGE } from "@common/configs/url/page-url";
import { resetPassword } from "@common/lib/auth/reset-password";
import { PasswordForgetTemplate } from "src/common/components/templates/sign/password-forget-template";

const PasswordForget: NextPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await resetPassword(email);
    if (result.isOk) {
      toast.success("メールを送信しました");
      await router.push(SIGN_IN_PAGE);
    }
    if (!result.isOk) toast.error(result.value || "");
  };

  return (
    <PasswordForgetTemplate back={router.back} setEmail={setEmail} handleSubmit={handleSubmit} />
  );
};
export default PasswordForget;
