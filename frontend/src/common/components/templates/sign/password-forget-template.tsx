import { Box, Button } from "@mui/material";
import * as React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import { Dispatch, SetStateAction } from "react";
import { CopyRightText } from "@common/components/elements/text/copy-right-text";
import { AMPERSAND_PAGE } from "@common/configs/url/page-url";
import { SizedBox } from "@common/components/elements/space";
import { SignIcon } from "@common/components/elements/sign/sign-icon";
import { theme } from "@common/configs/themes";

export interface IPasswordForgetTemplate {
  back: () => void;
  setEmail: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const PasswordForgetTemplate = ({
  back,
  setEmail,
  handleSubmit,
}: IPasswordForgetTemplate): JSX.Element => {
  return (
    <Container maxWidth={"xs"}>
      <SizedBox height={8} />

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
      <Button onClick={back} fullWidth>
        前のページに戻る
      </Button>

      {/* コピーライト */}
      <CopyRightText pageUrl={AMPERSAND_PAGE} />
    </Container>
  );
};
