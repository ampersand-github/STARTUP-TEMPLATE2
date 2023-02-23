import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { PrismaService } from "src/module/prisma/prisma.service";
import { SampleModule } from "../sample.module";
import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard, CustomRequest } from "src/module/auth/auth.guard";

describe("SampleController", () => {
  let app: NestFastifyApplication;
  const prisma = new PrismaService();
  const uid = "userId";

  beforeAll(async () => {
    await prisma.allTruncateForMysql();
    const moduleRef = await Test.createTestingModule({ imports: [SampleModule] })
      .overrideGuard(AuthGuard)
      .useValue({
        // 認証をモック
        canActivate: async (context: ExecutionContext) => {
          const request = context.switchToHttp().getRequest<CustomRequest>();
          if (!request.headers.authorization)
            throw new UnauthorizedException("認証エラー（テスト）");
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
    const deleteSample = prisma.samples.deleteMany();
    await prisma.$transaction([deleteSample]);
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  describe("save", () => {
    it("201", () => {
      return request(app.getHttpServer())
        .post("/sample")
        .set("Authorization", `Bearer `)
        .send({ age: 20, gender: "男性" })
        .expect(201)
        .expect((res) => {
          // console.log(res.status);
          // console.log(res.body);
        });
    });
  });

  describe("findOne", () => {
    it(`200`, async () => {
      const props = { gender: "男性", age: 20 };
      await prisma.samples.create({ data: { id: uid, ...props } });
      return request(app.getHttpServer())
        .get("/sample")
        .set("Authorization", `Bearer `)
        .expect(200)
        .expect((res) => {
          // console.log(res.status);
          expect(res.body).toStrictEqual(props);
        });
    });

    it("500 データがない", async () => {
      return request(app.getHttpServer())
        .get("/sample")
        .set("Authorization", `Bearer `)
        .expect(500)
        .expect((res) => {
          expect(res.statusCode).toStrictEqual(500);
        });
    });
  });
});
