import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_PERSONS } from "@/services/configs/url/api-url";
import { QUERY_KEY_PERSONS } from "@/services/configs/tan-stack-query/query-key";

export const UseQueryPersons = () => {
  const fetch = async () => {
    const res = await axios.get(API_PERSONS);
    return res.data;
  };

  return useQuery([QUERY_KEY_PERSONS], fetch);
};
