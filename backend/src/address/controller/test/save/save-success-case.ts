import { makeFakeAccount } from "src/acount/domain/fake/make-fake-account";
import { makeFakeAddress } from "src/address/domain/fake/make-fake-address";
import { AddressId } from "src/address/domain/address-id";
import * as request from "supertest";
import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { AccountRepository } from "src/acount/repository/account.repository";
import { AddressRepository } from "src/address/repository/address.repository";
import { AccountId } from "src/acount/domain/account-id";

export const saveSuccessCase = async (
  app: NestFastifyApplication,
  accountRepository: AccountRepository,
  addressRepository: AddressRepository,
  accountId: AccountId
) => {
  const fakeAccount = makeFakeAccount({ id: accountId });
  const fakeAddress = makeFakeAddress({ id: AddressId.create(), accountId });
  await accountRepository.save(fakeAccount);
  await addressRepository.save(fakeAddress);
  return request(app.getHttpServer())
    .post("/address")
    .set("Authorization", `Bearer `)
    .send({ postalCode: "1000001", prefecture: "東京都", city: "千代田区", town: "千代田1-1" })
    .expect(201);
};
