#!/bin/bash

generateDomainIdFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { UniqueEntityId } from \"src/__shared__/domain/unique-entity-id\";
import { ulid } from \"ulid\";

export class ${pascalName}Id extends UniqueEntityId {
  private constructor(value: string) {
    super(value, \"${pascalName}Id\");
  }

  public static create(): ${pascalName}Id {
    return new ${pascalName}Id(ulid());
  }

  public static reBuild(value: string): ${pascalName}Id {
    return new ${pascalName}Id(value);
  }
}
" > "${targetDir}/domain/${camelName}-id.ts"
}
