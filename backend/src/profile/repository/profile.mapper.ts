import { profiles } from "@prisma/client";
import { AccountId } from "src/acount/domain/account-id";
import { IProfile, Profile } from "../domain/profile";
import { ProfileId } from "../domain/profile-id";

export const profileMapper = (profile: profiles): Profile => {
  const props: IProfile = {
    accountId: AccountId.reBuild(profile.account_id),
    nickName: profile.nick_name,
    iconPath: profile.icon_path,
    motto: profile.motto,
    profileText: profile.profile_text,
  };
  const id = ProfileId.reBuild(profile.id);
  return Profile.reBuild(props, id);
};
