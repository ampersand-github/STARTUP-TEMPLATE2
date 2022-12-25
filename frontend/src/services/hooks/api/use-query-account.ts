import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_FETCH_ACCOUNT } from "@/services/constraints/url/api-url";
import { QUERY_KEY_ACCOUNTS } from "@/services/constraints/tan-stack-query/query-key";
import { getToken } from "@/services/configs/firebase-config";
import { axiosConfig } from "@/services/configs/axios-config";

export const UseQueryAccount = () => {
  const fetch = async () => {
    const token = await getToken();
    const res = await axios.get(API_FETCH_ACCOUNT, await axiosConfig(token));
    return res.data;
  };

  return useQuery([QUERY_KEY_ACCOUNTS], fetch);
};
