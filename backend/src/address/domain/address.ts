import { AggregateRoot } from "src/__shared__/domain/aggregate-root";
import { AddressId } from "./address-id";
import { Prefecture } from "./value-object/prefecture";
import { PostalCode } from "./value-object/post-code";
import { AccountId } from "src/acount/domain/account-id";

export interface IAddress {
  accountId: AccountId;
  postalCode: PostalCode;
  prefecture: Prefecture;
  city: string;
  town: string;
  block: string;
}

export class Address extends AggregateRoot<IAddress, AddressId> {
  public get accountId(): IAddress["accountId"] {
    return this._props.accountId;
  }
  public get postalCode(): IAddress["postalCode"] {
    return this._props.postalCode;
  }

  public get prefecture(): IAddress["prefecture"] {
    return this._props.prefecture;
  }

  public get city(): IAddress["city"] {
    return this._props.city;
  }

  public get town(): IAddress["town"] {
    return this._props.town;
  }

  public get block(): IAddress["block"] {
    return this._props.block;
  }

  private constructor(props: IAddress, id: AddressId) {
    super(props, id);
    // ここにビジネスルールを書く
  }

  public static create(props: IAddress): Address {
    return new Address(props, AddressId.create());
  }

  public static reBuild(props: IAddress, id: AddressId): Address {
    return new Address(props, id);
  }
}
