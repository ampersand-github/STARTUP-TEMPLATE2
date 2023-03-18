import { AccountId } from "./account-id";
import { AggregateRoot } from "src/__shared__/domain/aggregate-root";
import { Email } from "./value-object/email";

export interface IAccount {
  email: Email;
}

export class Account extends AggregateRoot<IAccount, AccountId> {
  public get email(): IAccount["email"] {
    return this._props.email;
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
