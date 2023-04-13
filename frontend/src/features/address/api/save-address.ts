import { AxiosResponse } from "axios";
import { postBase } from "@common/api/post-base";
import { ApiUrl } from "@common/configs/api-url";
import { IAddress } from "../interfaces/address-interface";

export const saveAddress = async (data: IAddress): Promise<AxiosResponse> => {
  return await postBase(ApiUrl.ADDRESS, data);
};
