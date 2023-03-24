import axios from "axios";
import { axiosConfig } from "src/services/configs/axios-config";
import { useQuery } from "@tanstack/react-query";
import { API_FETCH_ADDRESS } from "src/services/constraints/url/api-url";
import { QUERY_KEY_ADDRESS } from "src/services/constraints/tan-stack-query/query-key";
import { joinUrl } from "@/services/lib/join-rul";
import { IAddress } from "src/components/organisms/address-form";

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
export const useQueryFetchAddress = (postCode: string) => {
  const fetch = async (): Promise<IAddress[]> => {
    const url = joinUrl(API_FETCH_ADDRESS, { postCode: postCode });
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
