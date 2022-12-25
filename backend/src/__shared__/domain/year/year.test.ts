import { IYear, Year } from "./year";

describe("Year", () => {
  const props: IYear = {
    value: 2001,
  };
  describe("オブジェクトの生成", () => {
    it("作成できる", () => {
      const actual = new Year(props);
      expect(actual).toStrictEqual(expect.any(Year));
    });
  });
  describe("getメソッド", () => {
    const year = new Year(props);
    const minYear = year.MIN_YEAR;
    const maxYear = year.MAX_YEAR;
    it("最小文字数で作成できる", () => {
      const year = new Year({ value: minYear });
      expect(year.value).toStrictEqual(minYear);
    });
    it("最大文字数で作成できる", () => {
      const year = new Year({ value: maxYear });
      expect(year.value).toStrictEqual(maxYear);
    });
    it("最小文字数以下で作成できない", () => {
      const belowMinYear = minYear - 1;
      expect(() => new Year({ value: belowMinYear })).toThrow(
        `年は${minYear}~${maxYear}の間で設定してください。`
      );
    });
    it("最大文字数以上で作成できない", () => {
      const exceedsMaxYear = maxYear + 1;
      expect(() => new Year({ value: exceedsMaxYear })).toThrow(
        `年は${minYear}~${maxYear}の間で設定してください。`
      );
    });
  });
});
