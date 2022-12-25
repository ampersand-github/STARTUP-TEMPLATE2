import { AccountId } from "./account-id";
import { AggregateRoot } from "src/__shared__/domain/aggregate-root";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAccount {}

export class Account extends AggregateRoot<IAccount, AccountId> {
  private constructor(props: IAccount, id: AccountId) {
    super(props, id);
    // ここにビジネスルールを書く
  }

  public static create(props: IAccount): Account {
    return new Account(props, AccountId.create());
  }

  public static reBuild(props: IAccount, id: AccountId): Account {
    return new Account(props, id);
  }
}
