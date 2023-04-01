import { IProfile, Profile } from "./profile";
import { ProfileId } from "./profile-id";
import { defaultProfile } from "./fake/make-fake-profile";

describe("Profile", () => {
  const props: IProfile = defaultProfile;

  describe("オブジェクトの生成", () => {
    it("createできる", () => {
      const actual = Profile.create(props);
      expect(actual).toStrictEqual(expect.any(Profile));
    });

    it("reBuildできる", () => {
      const id = "1234567-0000-1234-1111-123456789012";
      const sampleId = ProfileId.reBuild(id);
      const actual = Profile.reBuild(props, sampleId);
      expect(actual).toStrictEqual(expect.any(Profile));
      expect(actual.id.toString()).toStrictEqual(id);
    });
  });

  describe("値を取得できる", () => {
    it("値を取得できる", () => {
      const actual = Profile.create(props);
      expect(actual.accountId).toStrictEqual(props.accountId);
      expect(actual.nickName).toStrictEqual(props.nickName);
      expect(actual.iconPath).toStrictEqual(props.iconPath);
      expect(actual.motto).toStrictEqual(props.motto);
      expect(actual.profileText).toStrictEqual(props.profileText);
    });
  });
});
