import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { API_CREATE_ACCOUNT } from "@/services/constraints/url/api-url";
import { axiosConfig } from "@/services/configs/axios-config";
import { getToken } from "@/services/configs/firebase-config";

export const UseCreateAccount = () => {
  return useMutation(async () => {
    const token = await getToken();
    const data = "";
    return axios.post(API_CREATE_ACCOUNT, data, await axiosConfig(token));
  });
};
