import { IProfile } from "@features/profiles/interfaces/profile-interface";
import { requestProfileDto } from "@features/profiles/interfaces/request-profile-dto";
import { postBase } from "@common/api/post-base";
import { initialProfileValue } from "@features/profiles/initial-values/initial-profile-value";
import { ApiUrl } from "@common/configs/api-url";

export const saveProfile = async (data: IProfile): Promise<void> => {
  // postデータの作成
  const postData: requestProfileDto = {
    nickName: data.userName ?? initialProfileValue.userName,
    iconPath: data.iconPath ?? initialProfileValue.iconPath,
    motto: data.motto ?? initialProfileValue.motto,
    profileText: data.profile ?? initialProfileValue.profile,
  };

  await postBase(ApiUrl.PROFILES, postData);
};
