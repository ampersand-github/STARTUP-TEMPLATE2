import { UniqueEntityId } from "src/__shared__/domain/unique-entity-id";
import { ulid } from "ulid";

export class AccountId extends UniqueEntityId {
  private constructor(value: string) {
    super(value, "AccountId");
  }

  public static create(): AccountId {
    return new AccountId(ulid());
  }

  public static reBuild(value: string): AccountId {
    return new AccountId(value);
  }
}
