import * as React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IUseAuth } from "src/services/hooks/use-auth";
import { NextRouter } from "next/router";

export interface ISignForm {
  text: string;
  user: IUseAuth["user"];
  signIn: IUseAuth["signIn"];
  router: NextRouter;
}

export const SignForm = ({ text, user, signIn, router }: ISignForm) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    await signIn(data.get("email") as string, data.get("password") as string);
    router.back();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <p>{user ? user.uid : "null"}</p>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="パスワードを表示する"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {text}
      </Button>
    </Box>
  );
};
