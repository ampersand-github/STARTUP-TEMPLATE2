import { AccountId } from "src/acount/domain/account-id";
import { Address } from "../address";

export interface IAddressRepository {
  findOne(id: AccountId): Promise<Address | undefined>;
  save(address: Address): Promise<Address>;
}
