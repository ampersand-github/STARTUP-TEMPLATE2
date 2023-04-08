import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_ADDRESS } from "@common/configs/tan-stack-query/query-key";
import { IAddress } from "@common/components/organisms/address-form";
import { API_FETCH_ADDRESS } from "@common/configs/url/api-url";
import { axiosConfig } from "@common/configs/axios-config";
import { joinUrl } from "@common/lib/join-rul";

interface results {
  address1: string; // 県
  address2: string; // 市区町村
  address3: string; // 町名以下
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
}
export const useQueryFetchAddress = (postalCode: string) => {
  const fetch = async (): Promise<IAddress[]> => {
    const url = joinUrl(API_FETCH_ADDRESS, { postalCode: postalCode });
    const res = await axios.get(url, await axiosConfig());
    if (res.data.results.length === null) return [];
    return res.data.results.map((one: results) => {
      return {
        postalCode: one.zipcode,
        prefecture: one.address1,
        city: one.address2,
        town: one.address3,
      };
    });
  };

  return useQuery<IAddress[]>([QUERY_KEY_ADDRESS], fetch, {
    enabled: false,
    refetchOnWindowFocus: false,
    cacheTime: 0,
  });
};
