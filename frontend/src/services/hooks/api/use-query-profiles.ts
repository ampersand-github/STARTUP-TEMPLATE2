import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_PROFILES } from "src/services/constraints/url/api-url";
import { QUERY_KEY_PROFILES } from "src/services/constraints/tan-stack-query/query-key";
import { UseQueryResult } from "@tanstack/react-query/src/types";
import { IProfile } from "@/components/organisms/profile-form";
import { axiosConfig } from "@/services/configs/axios-config";
import { getToken } from "@/services/configs/firebase-config";

export const UseQueryProfiles = (): UseQueryResult<IProfile, AxiosError> => {
  const fetch = async () => {
    const token = await getToken();
    const res = await axios.get<IProfile>(API_PROFILES, await axiosConfig(token));
    return res.data;
  };

  return useQuery<IProfile, AxiosError>([QUERY_KEY_PROFILES], fetch, {});
};
