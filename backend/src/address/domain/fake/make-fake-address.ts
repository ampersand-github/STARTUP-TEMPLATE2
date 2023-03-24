import { Address, IAddress } from "../address";
import { PostCode } from "src/address/domain/value-object/post-code";
import { Prefecture } from "../value-object/prefecture";
import { AddressId } from "../address-id";
import { AccountId } from "src/acount/domain/account-id";

// - - - - - - - - - - - - - - - - - - - - - - - -
// デフォルト値
// - - - - - - - - - - - - - - - - - - - - - - - -
export const defaultAddress: IAddress = {
  accountId: AccountId.reBuild("BAAB6A12-85F7-40E3-8414-5E9C692D3609"),
  postCode: new PostCode({ value: "1000001" }),
  prefecture: new Prefecture({ value: "東京都" }),
  city: "千代田区",
  town: "千代田1-1",
};

// - - - - - - - - - - - - - - - - - - - - - - - -
// テスト用インスタンス作成
// - - - - - - - - - - - - - - - - - - - - - - - -
export const makeFakeAddress = ({
  id = AddressId.create(),
  accountId = defaultAddress.accountId,
  postCode = defaultAddress.postCode,
  prefecture = defaultAddress.prefecture,
  city = defaultAddress.city,
  town = defaultAddress.town,
  block = undefined,
}): Address => {
  return Address.reBuild({ accountId, postCode, prefecture, city, town, block }, id);
};
