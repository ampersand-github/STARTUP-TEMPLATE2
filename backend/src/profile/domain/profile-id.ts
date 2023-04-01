import { UniqueEntityId } from "src/__shared__/domain/unique-entity-id";
import { ulid } from "ulid";

export class ProfileId extends UniqueEntityId {
  private constructor(value: string) {
    super(value, "ProfileId");
  }

  public static create(): ProfileId {
    return new ProfileId(ulid());
  }

  public static reBuild(value: string): ProfileId {
    return new ProfileId(value);
  }
}
