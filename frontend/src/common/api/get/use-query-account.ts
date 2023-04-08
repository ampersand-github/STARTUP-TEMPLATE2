import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getToken } from "@common/configs/firebase-config";
import { API_FETCH_ACCOUNT } from "@common/configs/url/api-url";
import { axiosConfig } from "@common/configs/axios-config";
import { QUERY_KEY_ACCOUNTS } from "@common/configs/tan-stack-query/query-key";

export const UseQueryAccount = () => {
  const fetch = async () => {
    const token = await getToken();
    const res = await axios.get(API_FETCH_ACCOUNT, await axiosConfig(token));
    return res.data;
  };

  return useQuery([QUERY_KEY_ACCOUNTS], fetch);
};
