import { IProfile } from "@features/profiles/interfaces/profile-interface";
import { requestProfileDto } from "@features/profiles/interfaces/request-profile-dto";
import { postBase } from "src/common/api/base/post-base";
import { API_PROFILES } from "src/common/configs/url/api-url";

export const saveProfile = async (data: IProfile): Promise<void> => {
  // postデータの作成
  const postData: requestProfileDto = {
    nickName: data.userName ?? "",
    iconPath: data.iconPath ?? "",
    motto: data.motto ?? "",
    profileText: data.profile ?? "",
  };

  await postBase(API_PROFILES, postData);
};
