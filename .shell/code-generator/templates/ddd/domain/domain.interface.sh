#!/bin/bash

generateDomainInterfaceFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${pascalName} } from \"../${camelName}\";
import { ${pascalName}Id } from \"../${camelName}-id\";

export interface I${pascalName}Repository {
  isExist(id: ${pascalName}Id): Promise<boolean>;
  findOne(id: ${pascalName}Id): Promise<${pascalName}>;
  save(${camelName}: ${pascalName}): Promise<${pascalName}>;
}

" > "${targetDir}/domain/interface/${camelName}.interface.ts"
}
