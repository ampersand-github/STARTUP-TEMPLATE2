import { Profile } from "../profile";
import { ProfileId } from "../profile-id";
import { defaultProfile, makeFakeProfile } from "./make-fake-profile";

describe("makeProfileFake", () => {
  describe("インスタンスが生成できる", () => {
    it("指定をしない場合", () => {
      const actual = makeFakeProfile({});
      expect(actual).toStrictEqual(expect.any(Profile));
      expect(actual.id).toStrictEqual(expect.any(ProfileId));
      expect(actual.nickName).toStrictEqual(defaultProfile.nickName);
      expect(actual.iconPath).toStrictEqual(defaultProfile.iconPath);
      expect(actual.motto).toStrictEqual(defaultProfile.motto);
      expect(actual.profileText).toStrictEqual(defaultProfile.profileText);
    });
    it("指定をする場合", () => {
      const id = ProfileId.create();
      const nickName = "newNickName";
      const iconPath = "http://localhost:3000/image/url/new";
      const motto = "newMotto";
      const profileText = "newProfileText";
      const actual = makeFakeProfile({ id, nickName, iconPath, motto, profileText });
      expect(actual).toStrictEqual(expect.any(Profile));
      expect(actual.id).toStrictEqual(expect.any(ProfileId));
      expect(actual.id).toStrictEqual(id);
      expect(actual.nickName).not.toStrictEqual(defaultProfile.nickName);
      expect(actual.nickName).toStrictEqual(nickName);
      expect(actual.iconPath).not.toStrictEqual(defaultProfile.iconPath);
      expect(actual.iconPath).toStrictEqual(iconPath);
      expect(actual.motto).not.toStrictEqual(defaultProfile.motto);
      expect(actual.motto).toStrictEqual(motto);
      expect(actual.profileText).not.toStrictEqual(defaultProfile.profileText);
      expect(actual.profileText).toStrictEqual(profileText);
    });
  });
});
