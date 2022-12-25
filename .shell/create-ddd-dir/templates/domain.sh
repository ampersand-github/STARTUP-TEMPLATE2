#!/bin/bash

createDomainFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { AggregateRoot } from \"src/__shared__/domain/aggregate-root\";
import { ${pascalName}Id } from \"./${camelName}-id\";

export interface I${pascalName} {
  something1: string;
  something2: number;
}

export class ${pascalName} extends AggregateRoot<I${pascalName}, ${pascalName}Id> {
  public get something1(): I${pascalName}[\"something1\"] {
    return this._props.something1;
  }

  public get something2(): I${pascalName}[\"something2\"] {
    return this._props.something2;
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
}

" > "${targetDir}/domain/${camelName}.ts"
}
