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
  findOne(id: ${pascalName}Id): Promise<${pascalName}>;
  save(${camelName}: ${pascalName}): Promise<${pascalName}>;
}

" > "${targetDir}/domain/interface/${camelName}.interface.ts"
}
