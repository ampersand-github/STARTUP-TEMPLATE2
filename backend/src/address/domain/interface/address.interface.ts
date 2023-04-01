import { AccountId } from "src/acount/domain/account-id";
import { Address } from "../address";

export interface IAddressRepository {
  isExist(id: AccountId): Promise<boolean>;
  findOne(id: AccountId): Promise<Address | undefined>;
  save(address: Address): Promise<Address>;
}
