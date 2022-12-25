#!/bin/bash

createModuleFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { Module } from \"@nestjs/common\";
import { AuthModule } from \"src/module/auth/auth.module\";
import { PrismaModule } from \"src/module/prisma/prisma.module\";

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [${pascalName}Controller],
  providers: [${pascalName}Repository, Save${pascalName}UseCase, Find${pascalName}UseCase],
  exports: [],
})
export class ${pascalName}Module {}
" > "${targetDir}/${camelName}.module.ts"
}
