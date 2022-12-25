import { IMoney, Money } from "../money";

describe("Money", () => {
  const props: IMoney = {
    value: 10000,
  };
  describe("オブジェクトの生成", () => {
    it("作成できる", () => {
      const actual = new Money(props);
      expect(actual).toStrictEqual(expect.any(Money));
    });
  });
  describe("getメソッド", () => {
    const price = new Money(props);
    const minMoney = price.MIN_PRICE;
    const maxMoney = price.MAX_PRICE;
    it("最小値で作成できる", () => {
      const price = new Money({ value: minMoney });
      expect(price.value).toStrictEqual(minMoney);
    });
    it("最大値で作成できる", () => {
      const price = new Money({ value: maxMoney });
      expect(price.value).toStrictEqual(maxMoney);
    });
    it("最小文字数以下で作成できない", () => {
      const belowMinMoney = minMoney - 1;
      expect(() => new Money({ value: belowMinMoney })).toThrow(
        `金額は${minMoney}~${maxMoney}の間で設定してください。`
      );
    });
    it("最大文字数以上で作成できない", () => {
      const exceedsMaxMoney = maxMoney + 1;
      expect(() => new Money({ value: exceedsMaxMoney })).toThrow(
        `金額は${minMoney}~${maxMoney}の間で設定してください。`
      );
    });
  });
});
