import { Address, IAddress } from "./address";
import { AddressId } from "./address-id";
import { PostalCode } from "./value-object/post-code";
import { Prefecture } from "./value-object/prefecture";
import { AccountId } from "src/acount/domain/account-id";

describe("Address", () => {
  const props: IAddress = {
    accountId: AccountId.reBuild("BAAB6A12-85F7-40E3-8414-5E9C692D3609"),
    postalCode: new PostalCode({ value: "1000001" }),
    prefecture: new Prefecture({ value: "東京都" }),
    city: "千代田区",
    town: "千代田1-1",
    block: "千代田ビル",
  };

  describe("オブジェクトの生成", () => {
    it("createできる", () => {
      const actual = Address.create(props);
      expect(actual).toStrictEqual(expect.any(Address));
    });

    it("reBuildできる", () => {
      const id = "1234567-0000-1234-1111-123456789012";
      const addressId = AddressId.reBuild(id);
      const actual = Address.reBuild(props, addressId);
      expect(actual).toStrictEqual(expect.any(Address));
      expect(actual.id.toString()).toStrictEqual(id);
    });
  });

  describe("値を取得できる", () => {
    it("値を取得できる", () => {
      const actual = Address.create(props);
      expect(actual.accountId).toStrictEqual(props.accountId);
      expect(actual.postalCode).toStrictEqual(props.postalCode);
      expect(actual.prefecture).toStrictEqual(props.prefecture);
      expect(actual.city).toStrictEqual(props.city);
      expect(actual.town).toStrictEqual(props.town);
      expect(actual.block).toStrictEqual(props.block);
    });
  });
});
