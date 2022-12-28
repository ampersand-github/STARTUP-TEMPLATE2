import { SampleId } from "./sample-id";

describe("SampleId", () => {
  describe("オブジェクトの生成", () => {
    it("createできる", () => {
      expect(SampleId.create()).toStrictEqual(expect.any(SampleId));
    });

    it("restoreできる", () => {
      expect(SampleId.reBuild("test-id")).toStrictEqual(expect.any(SampleId));
    });
  });
  it("toStringできる", () => {
    expect(SampleId.reBuild("test-id").toString()).toStrictEqual("test-id");
  });

  it("equalsできる", () => {
    expect(SampleId.reBuild("test-id").equals(SampleId.reBuild("test-id"))).toBe(true);
    expect(SampleId.reBuild("test-id").equals(SampleId.reBuild("not-equal-id"))).toBe(false);
  });
});
