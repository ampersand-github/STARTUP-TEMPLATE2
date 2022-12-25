createControllerFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { Controller, Get, Post, Req, UseGuards } from \"@nestjs/common\";
import { AuthGuard, CustomRequest } from \"src/module/auth/auth.guard\";
import { Save${pascalName}UseCase } from \"src/${camelName}/use-case/save-${camelName}.use-case\";
import { Find${pascalName}UseCase } from \"../use-case/find-${camelName}.use-case\";

@Controller(\"${camelName}\")
export class ${pascalName}Controller {
  constructor(
    private readonly save${pascalName}UseCase: Save${pascalName}UseCase,
    private readonly find${pascalName}UseCase: Find${pascalName}UseCase
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  public async findOne(@Req() request: CustomRequest): Promise<string> {
    try {
      const result = await this.find${pascalName}UseCase.execute(request.uid);
      return result.id.toString();
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  public async save${pascalName}(@Req() request: CustomRequest): Promise<void> {
    return await this.save${pascalName}UseCase.execute(request.uid);
  }
}
" > "${targetDir}/controller/${camelName}.controller.ts"
}
