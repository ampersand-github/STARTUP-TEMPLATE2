import { getToken } from "@common/configs/firebase-config";
import axios from "axios";
import { API_OPERATION_CHECK } from "@common/configs/url/api-url";
import { axiosConfig } from "@common/configs/axios-config";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_OPERATION_CHECK } from "@common/configs/tan-stack-query/query-key";

export const UseQueryOperationCheck = () => {
  const fetch = async () => {
    const token = await getToken();
    const res = await axios.get(API_OPERATION_CHECK, await axiosConfig(token));
    return res.data;
  };

  return useQuery([QUERY_KEY_OPERATION_CHECK], fetch);
};
