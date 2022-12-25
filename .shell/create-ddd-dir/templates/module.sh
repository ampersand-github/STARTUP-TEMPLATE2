#!/bin/bash

createModuleFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { Module } from \"@nestjs/common\";
import { ConfigService } from \"@nestjs/config\";

@Module({
  providers: [ConfigService],
  exports: [],
})
export class ${pascalName}Module {}
" > "${targetDir}/${camelName}.module.ts"
}
