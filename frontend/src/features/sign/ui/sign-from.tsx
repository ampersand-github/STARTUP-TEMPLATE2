import * as React from "react";
import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IUseAuth } from "@common/hooks/use-auth";
import { useState } from "react";

export interface ISignForm {
  text: string;
  signIn?: IUseAuth["signIn"];
  signUp?: IUseAuth["signUp"];
}

export const SignForm = ({ text, signIn, signUp }: ISignForm) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (signIn) {
      setIsLoading(true);
      await signIn(data.get("email") as string, data.get("password") as string);
    }

    if (signUp) {
      setIsLoading(true);
      await signUp(data.get("email") as string, data.get("password") as string);
    }
    setIsLoading(false);
  };

  if (isLoading) return <CircularProgress />;

  return (
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
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type={isShowPassword ? "text" : "password"}
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={
          <Checkbox
            value="remember"
            color="primary"
            onClick={() => setIsShowPassword(!isShowPassword)}
          />
        }
        label="パスワードを表示する"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {text}
      </Button>
    </Box>
  );
};
