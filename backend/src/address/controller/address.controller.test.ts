import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { PrismaService } from "src/module/prisma/prisma.service";
import { AddressModule } from "../address.module";
import { AddressRepository } from "src/address/repository/address.repository";
import { AccountId } from "src/acount/domain/account-id";
import { AccountRepository } from "src/acount/repository/account.repository";
import { successCase } from "src/address/controller/test/find-one/success-case";
import { createModuleRef } from "src/__shared__/controller/test/create-module-ref";
import { errorCase_noData } from "src/address/controller/test/find-one/error-case-no-data";
import { saveSuccessCase } from "src/address/controller/test/save/save-success-case";

describe("AddressController", () => {
  let app: NestFastifyApplication;
  const prisma = new PrismaService();
  const accountR = new AccountRepository(prisma);
  const addressR = new AddressRepository(prisma);
  const uid = "userId";
  const accountId = AccountId.reBuild(uid);

  beforeAll(async () => {
    // テスト前にテーブルを初期化
    await prisma.allTruncateForMysql();
    // モックを差し込む
    const moduleRef = await createModuleRef(uid, [AddressModule]);
    app = moduleRef.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  beforeEach(async () => {
    await prisma.$transaction(async () => {
      await prisma.address.deleteMany();
      await prisma.accounts.deleteMany();
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  describe("findOne", () => {
    it(`正常/200/データを取得できる`, async () => {
      await successCase(app, accountR, addressR, accountId);
    });
    it(`以上/500/データがないので取得できない`, async () => {
      await errorCase_noData(app);
    });
  });

  describe("save", () => {
    it(`正常/201/データを保存できる`, async () => {
      await saveSuccessCase(app, accountR, addressR, accountId);
    });
  });
});
