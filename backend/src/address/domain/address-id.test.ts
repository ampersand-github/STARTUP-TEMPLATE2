import { AddressId } from "./address-id";

describe("AddressId", () => {
  describe("オブジェクトの生成", () => {
    it("createできる", () => {
      expect(AddressId.create()).toStrictEqual(expect.any(AddressId));
    });

    it("restoreできる", () => {
      expect(AddressId.reBuild("test-id")).toStrictEqual(expect.any(AddressId));
    });
  });
  it("toStringできる", () => {
    expect(AddressId.reBuild("test-id").toString()).toStrictEqual("test-id");
  });

  it("equalsできる", () => {
    expect(AddressId.reBuild("test-id").equals(AddressId.reBuild("test-id"))).toBe(true);
    expect(AddressId.reBuild("test-id").equals(AddressId.reBuild("not-equal-id"))).toBe(false);
  });
});
