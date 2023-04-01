import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { PrismaService } from "src/module/prisma/prisma.service";
import { AddressModule } from "../address.module";
import { AddressRepository } from "src/address/repository/address.repository";
import { AccountId } from "src/acount/domain/account-id";
import { AccountRepository } from "src/acount/repository/account.repository";
import { createModuleRef } from "src/__shared__/controller/test/create-module-ref";
import { findOne_errorCase_noData } from "src/address/controller/test/find-one/find-one-error-case-no-data";
import { findOne_successCase } from "./test/find-one/find-one-success-case";
import { save_successCase_create } from "src/address/controller/test/save/save-success-case-create";
import { save_successCase_update } from "src/address/controller/test/save/save-success-case_update";
import { resultOne_successCase } from "src/address/controller/test/result-one/result-one-success-case";
import { resultOne_errorCase_noData } from "src/address/controller/test/result-one/result-one-error-case-no-data";

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
    // モジュールを差し込む
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
      await findOne_successCase(app, prisma, accountR, addressR, accountId);
    });
    it(`以上/500/データがないので取得できない`, async () => {
      await findOne_errorCase_noData(app, prisma);
    });
  });

  describe("resultOne", () => {
    it(`正常/200/データを取得できる`, async () => {
      await resultOne_successCase(app, prisma, accountR, addressR, accountId);
    });
    it(`異常/500/データがないので取得できない`, async () => {
      await resultOne_errorCase_noData(app, prisma);
    });
  });

  describe("save", () => {
    it(`正常/201/データを作成できる`, async () => {
      await save_successCase_create(app, prisma, accountR, addressR, accountId);
    });
    it(`正常/201/データを更新できる`, async () => {
      await save_successCase_update(app, prisma, accountR, addressR, accountId);
    });
  });
});
