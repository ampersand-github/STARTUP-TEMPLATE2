generateResultOneUseCaseFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { Inject, Injectable } from \"@nestjs/common\";
import { I${pascalName}Repository } from \"../domain/interface/${camelName}.interface\";
import { ${pascalName}Id } from \"../domain/${camelName}-id\";
import { ${pascalName}ResultResponseDto } from \"./response/${camelName}-result.response-dto\";

@Injectable()
export class ResultOne${pascalName}UseCase {
  constructor(
    @Inject(\"${pascalName}RepositoryProvide\") private readonly ${camelName}Repository: I${pascalName}Repository
  ) {}

  public async execute(id: string): Promise<${pascalName}ResultResponseDto> {
    try {
      const ${camelName}Id = ${pascalName}Id.reBuild(id);
      const ${camelName} = await this.${camelName}Repository.findOne(${camelName}Id);
      return new ${pascalName}ResultResponseDto(${camelName});
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
" > "${targetDir}/use-case/result-one-${camelName}.use-case.ts"
}


