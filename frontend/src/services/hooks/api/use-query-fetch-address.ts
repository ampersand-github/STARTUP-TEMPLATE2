import axios from "axios";
import { axiosConfig } from "src/services/configs/axios-config";
import { useQuery } from "@tanstack/react-query";
import { API_FETCH_ADDRESS } from "src/services/constraints/url/api-url";
import { QUERY_KEY_ADDRESS } from "src/services/constraints/tan-stack-query/query-key";
import { joinUrl } from "src/services/functions/join-rul";

interface IUseQueryFetchAddress {
  message: string;
  results: any[];
  status: number;
}

export const UseQueryFetchAddress = (postCode: string) => {
  const fetch = async () => {
    const url = joinUrl(API_FETCH_ADDRESS, { postCode: postCode });
    const res = await axios.get(url, await axiosConfig());
    return res.data;
  };

  return useQuery<IUseQueryFetchAddress>([QUERY_KEY_ADDRESS], fetch, {
    enabled: false,
    // refetchOnWindowFocus: false,
    // cacheTime: 0,
  });
};
