import { axiosConfig } from "@/services/configs/axios-config";
import { API_FETCH_ADDRESS_RESULT } from "@/services/constraints/url/api-url";
import { Result } from "@/services/interface/result";
import axios, { AxiosResponse } from "axios";
import useSWR from "swr";
import { IAddress } from "@/components/organisms/address-form";

export const useFetchAddressResult = (token: string) => {
  const config = axiosConfig(token);
  const url = API_FETCH_ADDRESS_RESULT;
  const fetcher = (url: string) =>
    axios.get(url, config).then((response: AxiosResponse<Result<IAddress>>) => response.data);

  const { data, error, isLoading } = useSWR(url, fetcher);

  return { data, error, isLoading };
};
