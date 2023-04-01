generateResponseDtoFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${pascalName} } from \"../../domain/${camelName}\";

export class ${pascalName}ResponseDto {
  private readonly age: number;
  private readonly gender: string;
  public constructor(${camelName}: ${pascalName}) {
    this.age = ${camelName}.age.value;
    this.gender = ${camelName}.gender.value;
  }
}
" > "${targetDir}/use-case/response/${camelName}.response-dto.ts"
}


