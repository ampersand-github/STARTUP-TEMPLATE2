import { AggregateRoot } from "src/__shared__/domain/aggregate-root";
import { SampleId } from "./sample-id";
import { Age } from "./value-object/age";
import { Gender } from "./value-object/gender";

export interface ISample {
  gender: Gender;
  age: Age;
}

export class Sample extends AggregateRoot<ISample, SampleId> {
  public get gender(): ISample["gender"] {
    return this._props.gender;
  }

  public get age(): ISample["age"] {
    return this._props.age;
  }

  private constructor(props: ISample, id: SampleId) {
    super(props, id);
    // ここにビジネスルールを書く
  }

  public static create(props: ISample): Sample {
    return new Sample(props, SampleId.create());
  }

  public static reBuild(props: ISample, id: SampleId): Sample {
    return new Sample(props, id);
  }
  public addAge(): Sample {
    const newAge = this.age.addAge();
    const newPros = { ...this._props, age: newAge };
    return Sample.reBuild(newPros, this.id);
  }
}
