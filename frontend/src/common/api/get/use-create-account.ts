import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { getToken } from "@common/configs/firebase-config";
import { axiosConfig } from "@common/configs/axios-config";
import { API_CREATE_ACCOUNT } from "@common/configs/url/api-url";

export const UseCreateAccount = () => {
  return useMutation(async (email: string) => {
    const token = await getToken();
    const data = { email: email };
    return axios.post(API_CREATE_ACCOUNT, data, await axiosConfig(token));
  });
};
