createRequestDtoFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { IsNotEmpty, IsNumber, IsOptional, IsString } from \"class-validator\";

export class Save${pascalName}RequestDto {
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsString()
  gender: string;
}

" > "${targetDir}/controller/request/save-${camelName}.request-dto.ts"
}


