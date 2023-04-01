import { profiles } from "@prisma/client";
import { Profile } from "../domain/profile";
import { ProfileId } from "../domain/profile-id";
import { profileMapper } from "./profile.mapper";

describe("profileMapper", (): void => {
  test("オブジェクトを生成できる", () => {
    const props: profiles = {
      id: "id",
      account_id: "accountId",
      nick_name: "nickName",
      icon_path: null,
      motto: "motto",
      profile_text: "profileText",
      created_at: new Date(),
      updated_at: new Date(),
    };

    const actual = profileMapper(props);
    expect(actual).toStrictEqual(expect.any(Profile));
    expect(actual.id).toStrictEqual(ProfileId.reBuild(props.id));
    expect(actual.accountId.toString()).toStrictEqual(props.account_id);
    expect(actual.nickName).toStrictEqual(props.nick_name);
    expect(actual.iconPath).toStrictEqual(props.icon_path);
    expect(actual.motto).toStrictEqual(props.motto);
    expect(actual.profileText).toStrictEqual(props.profile_text);
  });
});
