import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { PrismaService } from "src/module/prisma/prisma.service";
import { AddressModule } from "../address.module";
import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard, CustomRequest } from "src/module/auth/auth.guard";
import { makeFakeAddress } from "src/address/domain/fake/make-fake-address";
import { AddressId } from "src/address/domain/address-id";
import { AddressRepository } from "src/address/repository/address.repository";
import { AccountId } from "src/acount/domain/account-id";
import { makeFakeAccount } from "src/acount/domain/fake/make-fake-account";
import { AccountRepository } from "src/acount/repository/account.repository";

describe("AddressController", () => {
  let app: NestFastifyApplication;
  const prisma = new PrismaService();
  const accountRepository = new AccountRepository(prisma);
  const addressRepository = new AddressRepository(prisma);
  const uid = "userId";
  const accountId = AccountId.reBuild(uid);

  const canActivate = async (context: ExecutionContext, uid: string) => {
    const request = context.switchToHttp().getRequest<CustomRequest>();
    if (!request.headers.authorization) throw new UnauthorizedException("認証エラー（テスト）");
    request.uid = uid;
    return true;
  };

  beforeAll(async () => {
    // テスト前にテーブルを初期化
    await prisma.allTruncateForMysql();
    // モックを差し込む
    const moduleRef = await Test.createTestingModule({ imports: [AddressModule] })
      .overrideGuard(AuthGuard)
      .useValue({ canActivate: (context) => canActivate(context, uid) }) // 認証モックを差し込む
      .compile();
    app = moduleRef.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  beforeEach(async () => {
    const deleteAddress = prisma.address.deleteMany();
    const deleteAccount = prisma.accounts.deleteMany();
    await prisma.$transaction([deleteAddress, deleteAccount]);
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  describe("findOne", () => {
    it(`200`, async () => {
      const fakeAccount = makeFakeAccount({ id: accountId });
      const fakeAddress = makeFakeAddress({ id: AddressId.create(), accountId });
      await accountRepository.save(fakeAccount);
      await addressRepository.save(fakeAddress);
      //
      return request(app.getHttpServer())
        .get("/address")
        .set("Authorization", `Bearer `)
        .expect(200)
        .expect((res) => {
          expect(res.body).toStrictEqual({
            block: null,
            city: "千代田区",
            postalCode: "1000001",
            prefecture: "東京都",
            town: "千代田1-1",
          });
        });
    });

    it("500 データがない", async () => {
      return request(app.getHttpServer())
        .get("/address")
        .set("Authorization", `Bearer `)
        .expect(500)
        .expect((res) => {
          expect(res.body).toStrictEqual({
            statusCode: 500,
            message: "Internal server error",
          });
        });
    });
  });

  describe("save", () => {
    it("201", async () => {
      const fakeAccount = makeFakeAccount({ id: accountId });
      const fakeAddress = makeFakeAddress({ id: AddressId.create(), accountId });
      await accountRepository.save(fakeAccount);
      await addressRepository.save(fakeAddress);
      return request(app.getHttpServer())
        .post("/address")
        .set("Authorization", `Bearer `)
        .send({ postalCode: "1000001", prefecture: "東京都", city: "千代田区", town: "千代田1-1" })
        .expect(201);
    });
  });
});
