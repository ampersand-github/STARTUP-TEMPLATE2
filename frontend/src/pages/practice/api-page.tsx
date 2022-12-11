import { Stack, Typography } from "@mui/material";
import { UseQueryPersons } from "src/services/hooks/api/use-query-persons";

export default function ApiPage() {
  const { isLoading, isError, data: todos } = UseQueryPersons();

  if (isError) return <span>Error</span>;
  if (isLoading) return <span>isLoading</span>;

  console.log(todos.data);

  return (
    <Stack>
      <Typography>API動作確認用ページ</Typography>
      {JSON.stringify(todos.data)}
    </Stack>
  );
}
