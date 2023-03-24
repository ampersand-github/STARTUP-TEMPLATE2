import { PostalCode } from "src/address/domain/value-object/post-code";

describe("PostalCode", (): void => {
  test("オブジェクトを生成できる", () => {
    const postalCode = "1000001";
    const actual = new PostalCode({ value: postalCode });
    expect(actual.value).toStrictEqual(postalCode);
  });

  describe("通常ケース", (): void => {
    test("郵便番号が7桁である", () => {
      const correctPostalCode = "1000001";
      const actual = new PostalCode({ value: correctPostalCode });
      expect(actual.value).toStrictEqual(correctPostalCode);
    });
  });

  describe("エラーケース", (): void => {
    test("郵便番号が7桁でない", () => {
      const badPostalCode = "100000";
      expect(badPostalCode.length).not.toStrictEqual(7);
      const actual = () => new PostalCode({ value: badPostalCode });
      expect(actual).toThrowError("郵便番号桁数が7桁ではありません。7桁で入力してください");
    });
  });
});
