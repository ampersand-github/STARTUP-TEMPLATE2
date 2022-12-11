import { AxiosRequestConfig } from "axios";

export const axiosConfig = async (token?: string): Promise<AxiosRequestConfig> => {
  return {
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    timeout: 3000,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  };
};
