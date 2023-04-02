import { IAddress } from "@/components/organisms/address-form";
import { axiosConfig } from "@/services/configs/axios-config";
import { API_SAVE_ADDRESS } from "@/services/configs/url/api-url";
import axios, { AxiosResponse } from "axios";

export const saveAddress = async (data: IAddress, token: string): Promise<AxiosResponse> => {
  const config = axiosConfig(token);
  return await axios.post(API_SAVE_ADDRESS, data, config);
};
