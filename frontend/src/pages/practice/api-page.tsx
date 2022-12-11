import { Stack, Typography } from "@mui/material";
import { UseQueryOperationCheck } from "src/services/hooks/api/use-query-operation-check";
import { UseQueryPersons } from "src/services/hooks/api/use-query-persons";

export default function ApiPage() {
  const { isLoading: isLoadingP, error: errorP, data: todos } = UseQueryPersons();
  const { isLoading: isLoadingOC, error: errorOC, data: operationCheck } = UseQueryOperationCheck();

  if (errorOC || errorP) return <span>Error</span>;
  if (isLoadingOC || isLoadingP) return <span>isLoading</span>;

  return (
    <Stack>
      <Typography>API動作確認用ページ</Typography>
      <Typography> {JSON.stringify(todos.data)}</Typography>
      <Typography> {JSON.stringify(operationCheck)}</Typography>
    </Stack>
  );
}
