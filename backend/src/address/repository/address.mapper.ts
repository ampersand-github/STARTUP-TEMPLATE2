import { address } from "@prisma/client";
import { IAddress, Address } from "../domain/address";
import { AddressId } from "../domain/address-id";
import { AccountId } from "src/acount/domain/account-id";
import { PostCode } from "src/address/domain/value-object/post-code";
import { Prefecture } from "src/address/domain/value-object/prefecture";

export const addressMapper = (address: address): Address => {
  const props: IAddress = {
    accountId: AccountId.reBuild(address.account_id),
    postCode: new PostCode({ value: address.post_code }),
    prefecture: new Prefecture({ value: address.prefecture }),
    city: address.city,
    town: address.town,
    block: address.block,
  };
  const id = AddressId.reBuild(address.id);
  return Address.reBuild(props, id);
};
