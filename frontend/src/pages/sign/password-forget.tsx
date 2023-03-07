import * as React from "react";
import Container from "@mui/material/Container";
import { Space } from "src/components/elements/space";
import { CopyRightText } from "src/components/elements/text/copy-right-text";
import { SignIcon } from "src/components/elements/sign/sign-icon";
import { Box, Button, useTheme } from "@mui/material";
import { AMPERSAND_PAGE } from "src/services/constraints/url/page-url";
import { NextPage } from "next";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useEnqueueSnackbar } from "@/services/hooks/use-enqueue-snackbar";
import { resetPassword } from "@/services/lib/auth/reset-password";

const PasswordForget: NextPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const theme = useTheme();
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
    <Container maxWidth={"xs"}>
      <Space height={8} />

      {/* ログインアイコン */}
      <SignIcon
        text={"パスワードの再設定"}
        color={theme.palette.common.white}
        backGroundColor={theme.palette.primary.main}
      ></SignIcon>

      {/* サインインフォーム */}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          このアドレスに送信する
        </Button>
      </Box>
      <Button onClick={router.back} fullWidth>
        前のページに戻る
      </Button>

      {/* コピーライト */}
      <CopyRightText pageUrl={AMPERSAND_PAGE} />
    </Container>
  );
};
export default PasswordForget;
