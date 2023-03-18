import { Account } from "../account";
import { AccountId } from "../account-id";

export interface IAccountRepository {
  count(id: AccountId): Promise<number>;
  findOne(id: AccountId): Promise<Account>;
  save(account: Account): Promise<Account>;
}
