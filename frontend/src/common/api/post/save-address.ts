import { API_SAVE_ADDRESS } from "@common/configs/url/api-url";
import axios, { AxiosResponse } from "axios";
import { axiosConfig } from "@common/configs/axios-config";
import { IAddress } from "src/common/components/organisms/address-form";

export const saveAddress = async (data: IAddress, token: string): Promise<AxiosResponse> => {
  const config = axiosConfig(token);
  return await axios.post(API_SAVE_ADDRESS, data, config);
};
