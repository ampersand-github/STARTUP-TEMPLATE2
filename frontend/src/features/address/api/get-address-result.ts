import { QueryKey } from "@common/configs/tan-stack-query/query-key";
import { useBaseWithAuth } from "@common/api/base/use-base-with-auth";
import { IResponseAddressResult } from "@features/address/interfaces/response-address-result-interface";
import { ApiUrl } from "@common/configs/url/api-url";

export const getAddressResult = () => {
  const key = QueryKey.ADDRESS_RESULT;
  const url = ApiUrl.ADDRESS_RESULT;
  const {
    data: addressResult,
    isLoading: isAddressResultLoading,
    error: addressResultError,
  } = useBaseWithAuth<IResponseAddressResult>(key, url);

  return { addressResult, isAddressResultLoading, addressResultError };
};
