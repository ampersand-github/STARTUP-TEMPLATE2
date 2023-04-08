import { Address, IAddress } from "./address";
import { AddressId } from "./address-id";
import { defaultAddress } from "src/address/domain/fake/make-fake-address";

describe("Address", () => {
  const props: IAddress = defaultAddress;

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
