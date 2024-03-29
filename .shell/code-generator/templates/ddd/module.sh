#!/bin/bash

generateModuleFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { Module } from \"@nestjs/common\";
import { AuthModule } from \"src/module/auth/auth.module\";
import { PrismaModule } from \"src/module/prisma/prisma.module\";
import { ExceptionModule } from \"src/module/exception/exception.module\";
import { ${pascalName}Controller } from \"./controller/${camelName}.controller\";
import { ${pascalName}Repository } from \"./repository/${camelName}.repository\";
import { FindOne${pascalName}UseCase } from \"./use-case/find-one-${camelName}.use-case\";
import { Save${pascalName}UseCase } from \"./use-case/save-${camelName}.use-case\";

@Module({
  imports: [AuthModule, PrismaModule, ExceptionModule],
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
