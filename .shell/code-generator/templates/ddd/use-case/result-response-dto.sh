generateResultResponseDtoFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { ${pascalName} } from \"../../domain/${camelName}\";
import { ${pascalName}ResponseDto } from \"./${camelName}.response-dto\";

export class ${pascalName}ResultResponseDto {
  isOk: boolean;
  value?: ${pascalName}ResponseDto;
  public constructor(${camelName}?: ${pascalName}) {
      if (${camelName}) {
        this.isOk = true;
        this.value = new ${pascalName}ResponseDto(${camelName});
      } else {
        this.isOk = false;
        this.value = undefined;
      }
  }
}
" > "${targetDir}/use-case/response/${camelName}-result.response-dto.ts"
}


