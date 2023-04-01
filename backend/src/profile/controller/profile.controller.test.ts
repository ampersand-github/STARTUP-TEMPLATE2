import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { PrismaService } from "src/module/prisma/prisma.service";
import { ProfileModule } from "../profile.module";
import { createModuleRef } from "src/__shared__/controller/test/create-module-ref";

describe("ProfileController", () => {
  let app: NestFastifyApplication;
  const prisma = new PrismaService();
  const uid = "profileUserId";

  beforeAll(async () => {
    // テスト前にテーブルを初期化
    await prisma.allTruncateForMysql();
    // モジュールを差し込む
    const moduleRef = await createModuleRef(uid, [ProfileModule]);
    app = moduleRef.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  beforeEach(async () => {
    await prisma.$transaction(async () => {
      await prisma.profiles.deleteMany();
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  describe("findOne", () => {
    it("正常/200/データを取得できる", async () => {
      // await findOne_successCase(app, prisma, accountR, addressR, accountId);
    });
    it("異常/500/データがないので取得できない", async () => {
      // await findOne_errorCase_noData(app, prisma);
    });
  });

  describe("resultOne", () => {
    it("正常/200/データを取得できる", async () => {
      // await resultOne_successCase(app, prisma, accountR, addressR, accountId);
    });
    it("異常/500/データがないので取得できない", async () => {
      // await resultOne_errorCase_noData(app, prisma);
    });
  });

  describe("save", () => {
    it("正常/201/データを作成できる", async () => {
      // await save_successCase_create(app, prisma, accountR, addressR, accountId);
    });
    it("正常/201/データを更新できる", async () => {
      // await save_successCase_update(app, prisma, accountR, addressR, accountId);
    });
  });
});
