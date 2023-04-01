generateControllerTestFile () {
targetDir="$1"
pascalName="$2"
camelName="$3"

echo "
import * as request from \"supertest\";
import { Test } from \"@nestjs/testing\";
import { FastifyAdapter, NestFastifyApplication } from \"@nestjs/platform-fastify\";
import { PrismaService } from \"src/module/prisma/prisma.service\";
import { ${pascalName}Module } from \"../${camelName}.module\";
import { ExecutionContext, UnauthorizedException } from \"@nestjs/common\";
import { AuthGuard, CustomRequest } from \"src/module/auth/auth.guard\";
import { createModuleRef } from \"src/__shared__/controller/test/create-module-ref\";

describe(\"${pascalName}Controller\", () => {
  let app: NestFastifyApplication;
  const prisma = new PrismaService();
  const uid = \"${camelName}UserId\";

  beforeAll(async () => {
    // テスト前にテーブルを初期化
    await prisma.allTruncateForMysql();
    // モジュールを差し込む
    const moduleRef = await createModuleRef(uid, [${pascalName}Module]);
    app = moduleRef.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  beforeEach(async () => {
    await prisma.\$transaction(async () => {
        await prisma.${camelName}s.deleteMany();
      });
  });

  afterAll(async () => {
    await prisma.\$disconnect();
    await app.close();
  });

  describe(\"findOne\", () => {
    it(\"正常/200/データを取得できる\", async () => {
      // await findOne_successCase(app, prisma, accountR, addressR, accountId);
    });
    it(\"異常/500/データがないので取得できない\", async () => {
      // await findOne_errorCase_noData(app, prisma);
    });
  });

  describe(\"resultOne\", () => {
    it(\"正常/200/データを取得できる\", async () => {
      // await resultOne_successCase(app, prisma, accountR, addressR, accountId);
    });
    it(\"異常/500/データがないので取得できない\", async () => {
      // await resultOne_errorCase_noData(app, prisma);
    });
  });

  describe(\"save\", () => {
    it(\"正常/201/データを作成できる\", async () => {
      // await save_successCase_create(app, prisma, accountR, addressR, accountId);
    });
    it(\"正常/201/データを更新できる\", async () => {
      // await save_successCase_update(app, prisma, accountR, addressR, accountId);
    });
  });
});

" > "${targetDir}/controller/${camelName}.controller.test.ts"
}


