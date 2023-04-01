#!/bin/bash

generateDomainFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { Age } from \"./value-object/age\";
import { Gender } from \"./value-object/gender\";
import { AggregateRoot } from \"src/__shared__/domain/aggregate-root\";
import { ${pascalName}Id } from \"./${camelName}-id\";

export interface I${pascalName} {
  gender: Gender;
  age: Age;
}

export class ${pascalName} extends AggregateRoot<I${pascalName}, ${pascalName}Id> {
  public get gender(): I${pascalName}[\"gender\"] {
    return this._props.gender;
  }

  public get age(): I${pascalName}[\"age\"] {
    return this._props.age;
  }

  private constructor(props: I${pascalName}, id: ${pascalName}Id) {
    super(props, id);
    // ここにビジネスルールを書く
  }

  public static create(props: I${pascalName}): ${pascalName} {
    return new ${pascalName}(props, ${pascalName}Id.create());
  }

  public static reBuild(props: I${pascalName}, id: ${pascalName}Id): ${pascalName} {
    return new ${pascalName}(props, id);
  }
  public addAge(): ${pascalName} {
    const newAge = this.age.addAge();
    const newPros = { ...this._props, age: newAge };
    return ${pascalName}.reBuild(newPros, this.id);
  }
}

" > "${targetDir}/domain/${camelName}.ts"
}
