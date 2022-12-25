import { AccountId } from "./account-id";

describe("AccountId", () => {
  describe("オブジェクトの生成", () => {
    it("createできる", () => {
      expect(AccountId.create()).toStrictEqual(expect.any(AccountId));
    });

    it("restoreできる", () => {
      expect(AccountId.reBuild("test-id")).toStrictEqual(expect.any(AccountId));
    });
  });
  it("toStringできる", () => {
    expect(AccountId.reBuild("test-id").toString()).toStrictEqual("test-id");
  });

  it("equalsできる", () => {
    expect(AccountId.reBuild("test-id").equals(AccountId.reBuild("test-id"))).toBe(true);
    expect(AccountId.reBuild("test-id").equals(AccountId.reBuild("not-equal-id"))).toBe(false);
  });
});
