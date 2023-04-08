import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { firebaseAuth } from "@common/configs/firebase-config";
import { axiosConfig } from "@common/configs/axios-config";

export const useFetchBaseWithAuth = <T>(key: string, endpoint: string) => {
  const fetchWithToken = async () => {
    // idTokenを取得
    const user = firebaseAuth.currentUser;
    if (!user) throw new Error("User not found");
    const idToken = await user.getIdToken();

    // configを作成
    const config = axiosConfig(idToken);

    // APIリクエストを実行
    const response = await axios.get<T>(endpoint, config);
    return response.data;
  };

  // react-queryのuseQueryを使用
  return useQuery([key, endpoint], fetchWithToken, { suspense: true });
};
