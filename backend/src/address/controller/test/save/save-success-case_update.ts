import { makeFakeAccount } from "src/acount/domain/fake/make-fake-account";
import { makeFakeAddress } from "src/address/domain/fake/make-fake-address";
import * as request from "supertest";
import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { AccountRepository } from "src/acount/repository/account.repository";
import { AddressRepository } from "src/address/repository/address.repository";
import { AccountId } from "src/acount/domain/account-id";
import { PrismaService } from "src/module/prisma/prisma.service";
import { PostalCode } from "src/address/domain/value-object/post-code";
import { Prefecture } from "src/address/domain/value-object/prefecture";
import { IAddress } from "src/address/domain/address";

export const save_successCase_update = async (
  app: NestFastifyApplication,
  prisma: PrismaService,
  accountRepository: AccountRepository,
  addressRepository: AddressRepository,
  accountId: AccountId
) => {
  // テスト前にデータをクリアしているので0件
  expect(await prisma.address.count()).toStrictEqual(0);

  // 初期データを作成
  const fakeAccount = makeFakeAccount({ id: accountId });
  const fakeAddress = makeFakeAddress({ accountId });
  await accountRepository.save(fakeAccount);
  await addressRepository.save(fakeAddress);

  // 更新データを作成
  const updatedFakeAddressProps: IAddress = {
    accountId,
    postalCode: new PostalCode({ value: "3309301" }),
    prefecture: new Prefecture({ value: "埼玉県" }),
    city: "さいたま市浦和区",
    town: "高砂３丁目１５−１",
    block: "一階",
  };
  const updatedFakeAddress = makeFakeAddress({
    id: fakeAddress.id,
    ...updatedFakeAddressProps,
  });
  await addressRepository.save(updatedFakeAddress);

  // データを作成しているので1件
  expect(await prisma.address.count()).toStrictEqual(1);

  // APIを実行
  await request(app.getHttpServer())
    .post("/address")
    .set("Authorization", `Bearer `)
    .send({
      postalCode: updatedFakeAddressProps.postalCode.value,
      prefecture: updatedFakeAddressProps.prefecture.value,
      city: updatedFakeAddressProps.city,
      town: updatedFakeAddressProps.town,
      block: updatedFakeAddressProps.block,
    })
    .expect(201);

  // 更新されていることを確認
  const actual = await addressRepository.findOne(fakeAddress.accountId);
  expect(actual).toStrictEqual(updatedFakeAddress);
};
