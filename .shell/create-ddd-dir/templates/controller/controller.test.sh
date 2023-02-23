createControllerTestFile () {
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

describe(\"${pascalName}Controller\", () => {
  let app: NestFastifyApplication;
  const prisma = new PrismaService();
  const uid = \"userId\";

  beforeAll(async () => {
    await prisma.allTruncateForMysql();
    const moduleRef = await Test.createTestingModule({ imports: [${pascalName}Module] })
      .overrideGuard(AuthGuard)
      .useValue({
        // 認証をモック
        canActivate: async (context: ExecutionContext) => {
          const request = context.switchToHttp().getRequest<CustomRequest>();
          if (!request.headers.authorization)
            throw new UnauthorizedException(\"認証エラー（テスト）\");
          request.uid = uid;
          return true;
        },
      })
      .compile();
    app = moduleRef.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  beforeEach(async () => {
    const delete${pascalName} = prisma.${camelName}s.deleteMany();
    await prisma.\$transaction([delete${pascalName}]);
  });

  afterAll(async () => {
    await prisma.\$disconnect();
    await app.close();
  });

  describe(\"save\", () => {
    it(\"201\", () => {
      return request(app.getHttpServer())
        .post(\"/${camelName}\")
        .set(\"Authorization\", \`Bearer ${uid}\`)
        .send({ age: 20, gender: \"男性\" })
        .expect(201)
        .expect((res) => {
          // console.log(res.status);
          // console.log(res.body);
        });
    });
  });

  describe(\"findOne\", () => {
    it(\`200\`, async () => {
      const props = { gender: \"男性\", age: 20 };
      await prisma.${camelName}s.create({ data: { id: uid, ...props } });
      return request(app.getHttpServer())
        .get(\"/${camelName}\")
        .set(\"Authorization\", \`Bearer ${uid}\`)
        .expect(200)
        .expect((res) => {
          // console.log(res.status);
          expect(res.body).toStrictEqual(props);
        });
    });

    it(\"500 データがない\", async () => {
      return request(app.getHttpServer())
        .get(\"/${camelName}\")
        .set(\"Authorization\", \`Bearer ${uid}\`)
        .expect(500);
    });
  });
});

" > "${targetDir}/controller/${camelName}.controller.test.ts"
}


