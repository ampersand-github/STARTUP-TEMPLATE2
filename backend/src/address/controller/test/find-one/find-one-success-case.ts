import { makeFakeAccount } from "src/acount/domain/fake/make-fake-account";
import { makeFakeAddress } from "src/address/domain/fake/make-fake-address";
import { AddressId } from "src/address/domain/address-id";
import * as request from "supertest";
import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { AccountRepository } from "src/acount/repository/account.repository";
import { AddressRepository } from "src/address/repository/address.repository";
import { AccountId } from "src/acount/domain/account-id";
import { PrismaService } from "src/module/prisma/prisma.service";

export const findOne_successCase = async (
  app: NestFastifyApplication,
  prisma: PrismaService,
  accountRepository: AccountRepository,
  addressRepository: AddressRepository,
  accountId: AccountId
) => {
  expect(await prisma.address.count()).toStrictEqual(0);

  const fakeAccount = makeFakeAccount({ id: accountId });
  const fakeAddress = makeFakeAddress({ id: AddressId.create(), accountId });
  await accountRepository.save(fakeAccount);
  await addressRepository.save(fakeAddress);

  return request(app.getHttpServer())
    .get("/address")
    .set("Authorization", `Bearer `)
    .expect(200)
    .expect((res) => {
      expect(res.body).toStrictEqual({
        postalCode: fakeAddress.postalCode.value,
        prefecture: fakeAddress.prefecture.value,
        city: fakeAddress.city,
        town: fakeAddress.town,
        block: fakeAddress.block,
      });
    });
};
