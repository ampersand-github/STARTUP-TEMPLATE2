#!/bin/bash

createDomainInterfaceFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${pascalName} } from \"src/${camelName}/domain/${camelName}\";
import { ${pascalName}Id } from \"./${camelName}-id\";

export interface I${pascalName}Repository {
  count(id: ${pascalName}Id): Promise<number>;
  getAll(): Promise<${pascalName}[]>;
  findOne(id: ${pascalName}Id): Promise<${pascalName}>;
  save(${camelName}: ${pascalName}): Promise<${pascalName}>;
}

" > "${targetDir}/domain/${camelName}.interface.ts"
}
