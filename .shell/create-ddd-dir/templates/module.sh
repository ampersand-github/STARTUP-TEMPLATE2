#!/bin/bash

createModuleFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { Module } from \"@nestjs/common\";
import { AuthModule } from \"src/module/auth/auth.module\";
import { PrismaModule } from \"src/module/prisma/prisma.module\";
import { ${pascalName}Controller } from \"./controller/${pascalName}.controller\";
import { ${pascalName}Repository } from \"./repository/${pascalName}.repository\";
import { FindOne${pascalName}UseCase } from \"./use-case/find-one-${camelName}.use-case\";
import { Save${pascalName}UseCase } from \"./use-case/save-${camelName}.use-case\";

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [${pascalName}Controller],
  providers: [
  { provide: \"${pascalName}RepositoryProvide\", useClass: ${pascalName}Repository },
  Save${pascalName}UseCase,
  FindOne${pascalName}UseCase
  ],
  exports: [],
})
export class ${pascalName}Module {}
" > "${targetDir}/${camelName}.module.ts"
}
