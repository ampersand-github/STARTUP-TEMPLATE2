import { AxiosRequestConfig } from "axios";

export const axiosConfig = async (token?: string): Promise<AxiosRequestConfig> => {
  const _headers = token
    ? { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    : { "Content-Type": "application/json" };

  return {
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    timeout: 3000,
    headers: _headers,
  };
};
