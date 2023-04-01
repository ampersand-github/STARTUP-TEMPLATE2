generateSaveUseCaseFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { I${pascalName}, ${pascalName} } from \"../domain/${camelName}\";
import { Inject, Injectable } from \"@nestjs/common\";
import { ${pascalName}Id } from \"../domain/${camelName}-id\";
import { I${pascalName}Repository } from \"../domain/interface/${camelName}.interface\";
import { Age } from \"../domain/value-object/age\";
import { Gender } from \"../domain/value-object/gender\";
import { Save${pascalName}RequestDto } from \"../controller/request/save-${camelName}.request-dto\";

@Injectable()
export class Save${pascalName}UseCase {
  constructor(
    @Inject(\"${pascalName}RepositoryProvide\") private readonly ${camelName}Repository: I${pascalName}Repository
  ) {}

  public async execute(id: string, dto: Save${pascalName}RequestDto): Promise<void> {
    try {
      const ${camelName}Id = ${pascalName}Id.reBuild(id);
      const props: I${pascalName} = {
        age: new Age({ value: dto.age }),
        gender: new Gender({ value: Gender.getType(dto.gender) }),
      };
      const ${camelName}: ${pascalName} = ${pascalName}.reBuild(props, ${camelName}Id);
      await this.${camelName}Repository.save(${camelName});
    } catch (e) {
      throw new Error(e.message);
    }
  }
}


" > "${targetDir}/use-case/save-${camelName}.use-case.ts"
}


