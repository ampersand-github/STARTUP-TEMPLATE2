createControllerFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { Body, Controller, Get, Post, Req, UseGuards } from \"@nestjs/common\";
import { AuthGuard, CustomRequest } from \"src/module/auth/auth.guard\";
import { Save${pascalName}UseCase } from \"../use-case/save-${camelName}.use-case\";
import { FindOne${pascalName}UseCase } from \"../use-case/find-one-${camelName}.use-case\";
import { Save${pascalName}RequestDto } from \"./request/save-${camelName}.request-dto\";
import { ${pascalName}ResponseDto } from \"../use-case/response/${camelName}.response-dto\";

@Controller(\"${camelName}\")
export class ${pascalName}Controller {
  constructor(
    private readonly save${pascalName}UseCase: Save${pascalName}UseCase,
    private readonly findOne${pascalName}UseCase: FindOne${pascalName}UseCase
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  public async findOne(@Req() request: CustomRequest): Promise<${pascalName}ResponseDto> {
    try {
      return await this.findOne${pascalName}UseCase.execute(request.uid);
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  public async save${pascalName}(
    @Req() request: CustomRequest,
    @Body() dto: Save${pascalName}RequestDto
  ): Promise<void> {
     try {
       return await this.save${pascalName}UseCase.execute(request.uid, dto);
     } catch (e) {
       console.log(e.message);
       throw new Error(e.message);
     }
  }
}

" > "${targetDir}/controller/${camelName}.controller.ts"
}
