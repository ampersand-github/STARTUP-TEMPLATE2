import { ProfileId } from "../profile-id";
import { IProfile, Profile } from "../profile";
import { AccountId } from "src/acount/domain/account-id";

// - - - - - - - - - - - - - - - - - - - - - - - -
// デフォルト値
// - - - - - - - - - - - - - - - - - - - - - - - -
export const defaultProfile: IProfile = {
  accountId: AccountId.create(),
  nickName: "defaultNickName",
  iconPath: "http://localhost:3000/image/url",
  motto: "defaultMotto",
  profileText: "defaultProfileText",
};

// - - - - - - - - - - - - - - - - - - - - - - - -
// テスト用インスタンス作成
// - - - - - - - - - - - - - - - - - - - - - - - -
export const makeFakeProfile = ({
  id = ProfileId.create(),
  accountId = defaultProfile.accountId,
  nickName = defaultProfile.nickName,
  iconPath = defaultProfile.iconPath,
  motto = defaultProfile.motto,
  profileText = defaultProfile.profileText,
}): Profile => {
  return Profile.reBuild({ accountId, nickName, iconPath, motto, profileText }, id);
};
