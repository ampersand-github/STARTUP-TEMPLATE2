createResponseDtoFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${pascalName} } from \"../../domain/sample\";

export class ${pascalName}ResponseDto {
  private readonly age: number;
  private readonly gender: string;
  public constructor(sample: ${pascalName}) {
    this.age = sample.age.value;
    this.gender = sample.gender.value;
  }
}
" > "${targetDir}/use-case/response/${camelName}.response-dto.ts"
}


