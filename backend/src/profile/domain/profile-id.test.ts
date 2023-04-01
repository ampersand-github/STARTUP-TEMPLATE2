import { ProfileId } from "./profile-id";

describe("ProfileId", () => {
  describe("オブジェクトの生成", () => {
    it("createできる", () => {
      expect(ProfileId.create()).toStrictEqual(expect.any(ProfileId));
    });

    it("restoreできる", () => {
      expect(ProfileId.reBuild("test-id")).toStrictEqual(expect.any(ProfileId));
    });
  });
  it("toStringできる", () => {
    expect(ProfileId.reBuild("test-id").toString()).toStrictEqual("test-id");
  });

  it("equalsできる", () => {
    expect(ProfileId.reBuild("test-id").equals(ProfileId.reBuild("test-id"))).toBe(true);
    expect(ProfileId.reBuild("test-id").equals(ProfileId.reBuild("not-equal-id"))).toBe(false);
  });
});
