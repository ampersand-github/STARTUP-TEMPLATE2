import { AccountId } from "./account-id";
import { AggregateRoot } from "src/__shared__/domain/aggregate-root";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAccount {
  something1: string;
  something2: number;
}

export class Account extends AggregateRoot<IAccount, AccountId> {
  public get something1(): IAccount["something1"] {
    return this._props.something1;
  }

  public get something2(): IAccount["something2"] {
    return this._props.something2;
  }

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
