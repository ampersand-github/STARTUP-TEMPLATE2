createControllerFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import { Controller, Get, Post, UseGuards } from \"@nestjs/common\";
import { AuthGuard } from \"src/module/auth/auth.guard\";

@Controller()
export class ${pascalName}Controller {
  @Get()
  findOne(): string {
    return \"Hello\";
  }

  @UseGuards(AuthGuard)
  @Post()
  save(): void {}
}

" > "${targetDir}/controller/${camelName}.controller.ts"
}


