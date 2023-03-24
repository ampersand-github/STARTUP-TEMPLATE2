import { PostCode } from "src/address/domain/value-object/post-code";

describe("PostCode", (): void => {
  test("オブジェクトを生成できる", () => {
    const postCode = "1000001";
    const actual = new PostCode({ value: postCode });
    expect(actual.value).toStrictEqual(postCode);
  });

  describe("通常ケース", (): void => {
    test("郵便番号が7桁である", () => {
      const correctPostCode = "1000001";
      const actual = new PostCode({ value: correctPostCode });
      expect(actual.value).toStrictEqual(correctPostCode);
    });
  });

  describe("エラーケース", (): void => {
    test("郵便番号が7桁でない", () => {
      const badPostCode = "100000";
      expect(badPostCode.length).not.toStrictEqual(7);
      const actual = () => new PostCode({ value: badPostCode });
      expect(actual).toThrowError("郵便番号桁数が7桁ではありません。7桁で入力してください");
    });
  });
});
