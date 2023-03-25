import * as request from "supertest";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { PrismaService } from "src/module/prisma/prisma.service";
import { SampleModule } from "src/sample/sample.module";
import { createModuleRef } from "src/__shared__/controller/test/create-module-ref";

describe("SampleController", () => {
  let app: NestFastifyApplication;
  const prisma = new PrismaService();
  const uid = "userId";

  beforeAll(async () => {
    // テスト前にテーブルを初期化
    await prisma.allTruncateForMysql();
    // モックを差し込む
    const moduleRef = await createModuleRef(uid, [SampleModule]);
    app = moduleRef.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  beforeEach(async () => {
    await prisma.samples.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  describe("save", () => {
    it("201", async () => {
      return request(app.getHttpServer())
        .post("/sample")
        .set("Authorization", `Bearer `)
        .send({ age: 20, gender: "男性" })
        .expect(201);
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
          expect(res.body).toStrictEqual(props);
        });
    });

    it("500 データがない", async () => {
      return request(app.getHttpServer())
        .get("/sample")
        .set("Authorization", `Bearer `)
        .expect(500);
    });
  });
});
