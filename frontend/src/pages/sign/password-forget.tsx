import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { resetPassword } from "@/services/lib/auth/reset-password";
import { PasswordForgetTemplate } from "@/components/templates/sign/password-forget-template";
import { toast } from "react-toastify";
import { SIGN_IN_PAGE } from "@/services/constraints/url/page-url";

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
    if (!result.isOk) toast.error(result.message || "");
  };

  return (
    <PasswordForgetTemplate back={router.back} setEmail={setEmail} handleSubmit={handleSubmit} />
  );
};
export default PasswordForget;
