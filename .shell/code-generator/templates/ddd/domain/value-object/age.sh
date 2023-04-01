#!/bin/bash

generateAgeFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ValueObject } from \"src/__shared__/domain/value-object\";

export interface IAge {
  value: number;
}
export class Age extends ValueObject<IAge> {
  private readonly MINIMUM_AGE = 18;
  private readonly MAXIMUM_AGE = 30;
  public get value(): IAge[\"value\"] {
    return this._props.value;
  }

  public constructor(props: IAge) {
    super(props);
    if (this._props.value < this.MINIMUM_AGE) throw new Error(\"最低年齢に達していません\");
    if (this._props.value > this.MAXIMUM_AGE) throw new Error(\"最大年齢を超えています\");
  }

  public addAge() {
    return new Age({ value: this._props.value + 1 });
  }
}

" > "${targetDir}/domain/value-object/age.ts"
}
