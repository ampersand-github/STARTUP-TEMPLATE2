import { Prefecture } from "./prefecture";

describe("Prefecture", (): void => {
  test("オブジェクトを生成できる", () => {
    const prefecture = "東京都";
    const actual = new Prefecture({ value: prefecture });
    expect(actual.value).toStrictEqual(prefecture);
  });

  describe("通常ケース", (): void => {
    test("県名が正しい", () => {
      const prefecture = "東京都";
      const actual = new Prefecture({ value: prefecture });
      expect(actual.value).toStrictEqual(prefecture);
    });
  });

  // todo エラーケースを作る
  /*
  describe("エラーケース", (): void => {
    test("県名が誤っている", () => {
      const badPrefecture = "東西";
      const actual = () => new Prefecture({ value: badPrefecture });
      expect(actual).toThrowError("最低年齢に達していません");
    });
  });
 */
});
