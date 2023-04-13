import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fireAuth } from "@common/configs/firebase-config";
import { axiosConfig } from "@common/configs/axios-config";

export const useBaseWithAuth = <T>(key: string, endpoint: string) => {
  const fetchWithToken = async () => {
    // idTokenを取得
    const idToken = await fireAuth.currentUser?.getIdToken();

    // configを作成
    const config = axiosConfig(idToken);

    // APIリクエストを実行
    const response = await axios.get<T>(endpoint, config);
    return response.data;
  };

  // react-queryのuseQueryを使用
  return useQuery([key, endpoint], fetchWithToken, {
    suspense: true,
    enabled: !!fireAuth.currentUser,
  });
};
