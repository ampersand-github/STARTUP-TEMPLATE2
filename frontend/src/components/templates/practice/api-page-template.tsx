import { Stack, Typography } from "@mui/material";

export interface IApiPageTemplate {
  accounts: any;
  todos: any;
}

export const ApiPageTemplate = ({ accounts, todos }: IApiPageTemplate): JSX.Element => {
  return (
    <Stack spacing={3}>
      <Typography>API動作確認用ページ</Typography>
      <Typography> {JSON.stringify(accounts)}</Typography>
      <Typography> {JSON.stringify(todos)}</Typography>
    </Stack>
  );
};
