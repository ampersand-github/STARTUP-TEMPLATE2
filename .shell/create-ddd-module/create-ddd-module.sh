cd ../../backend/src || exit


pascalCaseModuleName="Sample"
camelCaseModuleName="sample"

# todo 該当するディレクトリがあったらexit

mkdir "${camelCaseModuleName}"
mkdir "${camelCaseModuleName}/domain"
mkdir "${camelCaseModuleName}/use-case"
mkdir "${camelCaseModuleName}/repository"
mkdir "${camelCaseModuleName}/controller"

cd "${camelCaseModuleName}" || exit

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

#
# module.ts
#
echo "
import { Module } from \"@nestjs/common\";
import { ConfigService } from \"@nestjs/config\";

@Module({
  providers: [ConfigService],
  exports: [],
})
export class ${pascalCaseModuleName}Module {}
" > "${camelCaseModuleName}.module.ts"

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

#
# controller.ts
#
echo "
import { Controller, Get, Post, UseGuards } from \"@nestjs/common\";
import { AuthGuard } from \"src/module/auth/auth.guard\";

@Controller()
export class AppController {
  @Get()
  findOne(): string {
    return \"Hello\";
  }

  @UseGuards(AuthGuard)
  @Post()
  save(): void {}
}

" > "./controller/${camelCaseModuleName}.controller.ts"

#
# controller.test.ts
#
# todo 書く
echo "" > "./controller/${camelCaseModuleName}.controller.test.ts"

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

#
# repository.ts
#
# todo 書く
echo "" > "./repository/${camelCaseModuleName}-repository.ts"

#
# repository.test.ts
#
# todo 書く
echo "" > "./repository/${camelCaseModuleName}-repository.test.ts"

#
# domain-mapping.ts
#
# todo 書く
echo "" > "./repository/${camelCaseModuleName}-mapping.ts"


#
# domain-mapping.test.ts
#
# todo 書く
echo "" > "./repository/${camelCaseModuleName}-mapping.test.ts"

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

#
# find-one-use-case.ts
#
# todo 書く
echo "" > "./use-case/find-one-${camelCaseModuleName}-use-case.ts"

#
# save-use-case.ts
#
# todo 書く
echo "" > "./use-case/save-${camelCaseModuleName}-use-case.ts"

#
# response-dto.ts
#
# todo 書く
echo "" > "./use-case/${camelCaseModuleName}-response-dto.ts"

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

#
# domain.ts
#
echo "" > "./domain/${camelCaseModuleName}.ts"

#
# domain.test.ts
#
# todo 書く
echo "" > "./domain/${camelCaseModuleName}.test.ts"

#
# domain-id.ts
#
# todo 書く
echo "" > "./domain/${camelCaseModuleName}-id.ts"

#
# domain-id.test.ts
#
# todo 書く
echo "" > "./domain/${camelCaseModuleName}-id.test.ts"

#
# domain-interface.ts
#
# todo 書く
echo "" > "./domain/${camelCaseModuleName}-interface.ts"
