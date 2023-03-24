import { UniqueEntityId } from "src/__shared__/domain/unique-entity-id";
import { ulid } from "ulid";

export class AddressId extends UniqueEntityId {
  private constructor(value: string) {
    super(value, "AddressId");
  }

  public static create(): AddressId {
    return new AddressId(ulid());
  }

  public static reBuild(value: string): AddressId {
    return new AddressId(value);
  }
}
