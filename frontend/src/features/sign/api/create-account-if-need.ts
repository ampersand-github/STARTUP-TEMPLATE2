import { ApiUrl } from "@common/configs/api-url";
import { postBase } from "@common/api/post-base";

export const createAccountIfNeed = async (email: string) => {
  const postData = { email: email };
  return await postBase(ApiUrl.ACCOUNT, postData);
};
