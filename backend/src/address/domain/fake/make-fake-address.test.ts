import { Address } from "../address";
import { AddressId } from "../address-id";
import { defaultAddress, makeFakeAddress } from "src/address/domain/fake/make-fake-address";
import { PostCode } from "src/address/domain/value-object/post-code";
import { Prefecture } from "src/address/domain/value-object/prefecture";

describe("makeAddressDummy", () => {
  describe("インスタンスが生成できる", () => {
    it("指定をしない場合", () => {
      const actual: Address = makeFakeAddress({});
      expect(actual).toStrictEqual(expect.any(Address));
      expect(actual.id).toStrictEqual(expect.any(AddressId));
      expect(actual.accountId).toStrictEqual(defaultAddress.accountId);
      expect(actual.postCode).toStrictEqual(defaultAddress.postCode);
      expect(actual.prefecture).toStrictEqual(defaultAddress.prefecture);
      expect(actual.city).toStrictEqual(defaultAddress.city);
      expect(actual.town).toStrictEqual(defaultAddress.town);
      expect(actual.town).toStrictEqual(defaultAddress.town);
    });
    it("指定をする場合", () => {
      const id = AddressId.create();
      const accountId = AddressId.reBuild("4303AA73-D6F5-4198-9A00-2E94D8EDF422");
      const postCode = new PostCode({ value: "3309301" });
      const prefecture = new Prefecture({ value: "埼玉県" });
      const city = "さいたま市浦和区";
      const town = "高砂３丁目１５−１";
      const block = "一階";
      const actual = makeFakeAddress({ id, accountId, postCode, prefecture, city, town, block });
      expect(actual).toStrictEqual(expect.any(Address));
      expect(actual.id).toStrictEqual(expect.any(AddressId));
      expect(actual.id).toStrictEqual(id);
      expect(actual.accountId).not.toStrictEqual(defaultAddress.accountId);
      expect(actual.accountId).toStrictEqual(accountId);
      expect(actual.postCode).not.toStrictEqual(defaultAddress.postCode);
      expect(actual.postCode).toStrictEqual(postCode);
      expect(actual.prefecture).not.toStrictEqual(defaultAddress.prefecture);
      expect(actual.prefecture).toStrictEqual(prefecture);
      expect(actual.city).not.toStrictEqual(defaultAddress.city);
      expect(actual.city).toStrictEqual(city);
      expect(actual.town).not.toStrictEqual(defaultAddress.town);
      expect(actual.town).toStrictEqual(town);
      expect(actual.block).not.toStrictEqual(defaultAddress.block);
      expect(actual.block).toStrictEqual(block);
    });
  });
});
