import { API_FETCH_ADDRESS_RESULT } from "@common/configs/url/api-url";
import axios, { AxiosResponse } from "axios";
import useSWR from "swr";
import { axiosConfig } from "@common/configs/axios-config";
import { IAddress } from "src/common/components/organisms/address-form";
import { Result } from "@common/interface/result";

export const useFetchAddressResult = (token: string) => {
  const config = axiosConfig(token);
  const url = API_FETCH_ADDRESS_RESULT;
  const fetcher = (url: string) =>
    axios.get(url, config).then((response: AxiosResponse<Result<IAddress>>) => response.data);

  const { data, error, isLoading } = useSWR(url, fetcher);

  return { data, error, isLoading };
};
