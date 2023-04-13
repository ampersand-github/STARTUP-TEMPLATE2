import { fireAuth } from "@common/configs/firebase-config";
import axios from "axios";
import { axiosConfig } from "@common/configs/axios-config";

export const postBase = async (url: string, data: unknown) => {
  // idTokenを取得
  const user = fireAuth.currentUser;
  if (!user) throw new Error("User not found");
  const idToken = await user.getIdToken();

  // axiosのconfigを作成
  const config = axiosConfig(idToken);
  return await axios.post(url, data, config);
};
