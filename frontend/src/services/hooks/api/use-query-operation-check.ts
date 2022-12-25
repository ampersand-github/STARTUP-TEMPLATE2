import axios from "axios";
import { axiosConfig } from "src/services/configs/axios-config";
import { useQuery } from "@tanstack/react-query";
import { API_OPERATION_CHECK } from "src/services/constraints/url/api-url";
import { QUERY_KEY_OPERATION_CHECK } from "src/services/constraints/tan-stack-query/query-key";
import { getToken } from "src/services/configs/firebase-config";

export const UseQueryOperationCheck = () => {
  const fetch = async () => {
    const token = await getToken();
    const res = await axios.get(API_OPERATION_CHECK, await axiosConfig(token));
    return res.data;
  };

  return useQuery([QUERY_KEY_OPERATION_CHECK], fetch);
};
