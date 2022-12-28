createFindOneUseCaseFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${pascalName} } from \"../domain/${camelName}\";
import { Inject, Injectable } from \"@nestjs/common\";
import { I${pascalName}Repository } from \"../domain/interface/${camelName}.repository.interface\";
import { ${pascalName}Id } from \"../domain/${camelName}-id\";

@Injectable()
export class Find${pascalName}UseCase {
  constructor(
    @Inject(\"${pascalName}RepositoryProvide\") private readonly ${camelName}Repository: I${pascalName}Repository
  ) {}

  public async execute(id: string): Promise<${pascalName}> {
    try {
      const ${camelName}Id = ${pascalName}Id.reBuild(id);
      return await this.${camelName}Repository.findOne(${camelName}Id);
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }
}
" > "${targetDir}/use-case/find-one.use-case.ts"
}


