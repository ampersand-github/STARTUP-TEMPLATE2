import { firebaseAuth } from "@/services/configs/firebase-config";
import axios from "axios";
import { axiosConfig } from "@/services/configs/axios-config";
import { useQuery } from "@tanstack/react-query";

export const useFetchBaseWithAuth = (key: string, endpoint: string) => {
  const fetchWithToken = async () => {
    // idTokenを取得
    const user = firebaseAuth.currentUser;
    if (!user) throw new Error("User not found");
    const idToken = await user.getIdToken();

    // APIリクエストを実行
    const response = await axios.get(endpoint, axiosConfig(idToken));
    return response.data;
  };

  // react-queryのuseQueryを使用
  return useQuery([key, endpoint], fetchWithToken);
};
