import { UniqueEntityId } from "src/__shared__/domain/unique-entity-id";
import { ulid } from "ulid";

export class SampleId extends UniqueEntityId {
  private constructor(value: string) {
    super(value, "SampleId");
  }

  public static create(): SampleId {
    return new SampleId(ulid());
  }

  public static reBuild(value: string): SampleId {
    return new SampleId(value);
  }
}
