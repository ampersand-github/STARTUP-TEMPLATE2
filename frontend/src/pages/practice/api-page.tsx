import { UseQueryPersons } from "src/services/hooks/api/use-query-persons";
import { UseQueryAccount } from "@/services/hooks/api/use-query-account";
import { NextPage } from "next";
import { ApiPageTemplate } from "@/components/templates/practice/api-page-template";

const ApiPage: NextPage = () => {
  const { isLoading: isLoadingP, error: errorP, data: todos } = UseQueryPersons();
  const { isLoading: isLoadingA, error: errorA, data: accounts } = UseQueryAccount();
  if (errorP || errorA) return <span>Error</span>;
  if (isLoadingP || isLoadingA) return <span>isLoading</span>;

  return <ApiPageTemplate todos={todos} accounts={accounts} />;
};
export default ApiPage;
