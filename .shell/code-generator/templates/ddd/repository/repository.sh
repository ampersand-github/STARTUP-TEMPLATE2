#!/bin/bash

generateRepositoryFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { Injectable } from \"@nestjs/common\";
import { PrismaService } from \"src/module/prisma/prisma.service\";
import { I${pascalName}Repository } from \"../domain/interface/${camelName}.interface\";
import { ${pascalName} } from \"../domain/${camelName}\";
import { ${pascalName}Id } from \"../domain/${camelName}-id\";
import { ${camelName}s } from \"@prisma/client\";
import { ${camelName}Mapper } from \"./${camelName}.mapper\";

@Injectable()
export class ${pascalName}Repository implements I${pascalName}Repository {
  constructor(private readonly prisma: PrismaService) {}

  public async isExist(id: ${pascalName}Id): Promise<boolean> {
    const count = await this.prisma.${camelName}s.count({ where: { account_id: id.toString() } });
    return count > 0;
  }

  public async findOne(id: ${pascalName}Id): Promise<${pascalName} | undefined> {
    try {
      const _id = id.toString();
      const result: ${camelName}s | null = await this.prisma.${camelName}s.findUnique({ where: { id: _id } });
      return result ? ${camelName}Mapper(result) : undefined;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  public async save(${camelName}: ${pascalName}): Promise<${pascalName}> {
    try {
      const id = ${camelName}.id.toString();
      const property = { age: ${camelName}.age.value, gender: ${camelName}.gender.value };

      const result: ${camelName}s = await this.prisma.${camelName}s.upsert({
        where: { id },
        create: { id, ...property },
        update: property,
      });

      return ${camelName}Mapper(result);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

" > "${targetDir}/repository/${camelName}.repository.ts"
}
