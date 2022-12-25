#!/bin/bash

createRepositoryFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { Injectable } from \"@nestjs/common\";
import { I${pascalName}Repository } from \"src/${camelName}/domain/interface/${camelName}.repository.interface\";
import { PrismaService } from \"src/module/prisma/prisma.service\";
import { ${pascalName} } from \"../domain/${camelName}\";
import { ${pascalName}Id } from \"../domain/${camelName}-id\";

@Injectable()
export class ${pascalName}Repository implements I${pascalName}Repository {
  constructor(private readonly prisma: PrismaService) {}

  public async count(id: ${pascalName}Id): Promise<number> {
    return await this.prisma.${camelName}s.count({ where: { id: id.toString() } });
  }

  public async findOne(id: ${pascalName}Id): Promise<${pascalName}> {
    try {
      const result = await this.prisma.${camelName}s.findUnique({ where: { id: id.toString() } });
      return await ${pascalName}.reBuild({}, ${pascalName}Id.reBuild(result.id));
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  // todo anyを${pascalName}にする
  public async save(${camelName}: ${pascalName}): Promise<any> {
    return await this.prisma.${camelName}s.create({ data: { id: ${camelName}.id.toString() } });
  }
}
" > "${targetDir}/repository/${camelName}.repository.ts"
}
