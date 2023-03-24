import { address } from "@prisma/client";
import { Address } from "../domain/address";
import { AddressId } from "../domain/address-id";
import { addressMapper } from "./address.mapper";

describe("addressMapper", (): void => {
  test("オブジェクトを生成できる", () => {
    const props: address = {
      id: "id",
      post_code: "1000001",
      prefecture: "東京都",
      city: "千代田区",
      town: "千代田市",
      block: null,
      created_at: new Date(),
      updated_at: new Date(),
      account_id: "accountId",
    };

    const actual = addressMapper(props);
    expect(actual).toStrictEqual(expect.any(Address));
    expect(actual.id).toStrictEqual(AddressId.reBuild(props.id));

    expect(actual.postCode.value).toStrictEqual(props.post_code);
    expect(actual.prefecture.value).toStrictEqual(props.prefecture);
    expect(actual.city).toStrictEqual(props.city);
    expect(actual.town).toStrictEqual(props.town);
    expect(actual.block).toStrictEqual(props.block);
    expect(actual.accountId.toString()).toStrictEqual(props.account_id);
  });
});
