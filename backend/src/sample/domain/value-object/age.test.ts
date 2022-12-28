import { Age } from "./age";

describe("Age", (): void => {
  test("オブジェクトを生成できる", () => {
    const age = 20;
    const actual = new Age({ value: age });
    expect(actual.value).toStrictEqual(age);
  });

  describe("通常ケース", (): void => {
    test("最低年齢", () => {
      const age = 18;
      const actual = new Age({ value: age });
      expect(actual.value).toStrictEqual(age);
    });

    test("最大年齢", () => {
      const age = 30;
      const actual = new Age({ value: age });
      expect(actual.value).toStrictEqual(age);
    });
  });

  describe("エラーケース", (): void => {
    test("最低年齢に達していません", () => {
      const age = 17;
      const actual = () => new Age({ value: age });
      expect(actual).toThrowError("最低年齢に達していません");
    });

    test("最大年齢を超えています", () => {
      const age = 31;
      const actual = () => new Age({ value: age });
      expect(actual).toThrowError("最大年齢を超えています");
    });
  });

  describe("addAge", (): void => {
    test("通常ケース", () => {
      const age = 18;
      const actual = new Age({ value: age });
      const expected = new Age({ value: age + 1 });
      expect(actual.addAge()).toStrictEqual(expected);
    });

    test("異常ケース", () => {
      const age = new Age({ value: 30 });
      const actual = () => age.addAge();
      expect(actual).toThrowError("最大年齢を超えています");
    });
  });
});
