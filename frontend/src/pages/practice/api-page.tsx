import { Stack, Typography } from "@mui/material";
import { UseQueryPersons } from "src/services/hooks/api/use-query-persons";
import { UseQueryAccount } from "@/services/hooks/api/use-query-account";

export default function ApiPage() {
  const { isLoading: isLoadingP, error: errorP, data: todos } = UseQueryPersons();
  const { isLoading: isLoadingA, error: errorA, data: accounts } = UseQueryAccount();
  if (errorP || errorA) return <span>Error</span>;
  if (isLoadingP || isLoadingA) return <span>isLoading</span>;

  return (
    <Stack spacing={3}>
      <Typography>API動作確認用ページ</Typography>
      <Typography> {JSON.stringify(accounts)}</Typography>
      <Typography> {JSON.stringify(todos.data)}</Typography>
    </Stack>
  );
}
