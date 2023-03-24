import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/module/prisma/prisma.service";
import { IAddressRepository } from "../domain/interface/address.interface";
import { Address } from "../domain/address";
import { address } from "@prisma/client";
import { addressMapper } from "./address.mapper";
import { AccountId } from "src/acount/domain/account-id";

@Injectable()
export class AddressRepository implements IAddressRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findOne(id: AccountId): Promise<Address | undefined> {
    try {
      const account_id = id.toString();
      const result = await this.prisma.address.findUnique({ where: { account_id } });
      return result ? addressMapper(result) : undefined;
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  public async save(address: Address): Promise<Address> {
    try {
      const id = address.id.toString();
      const accountId = address.accountId.toString();
      const property = {
        post_code: address.postalCode.value,
        prefecture: address.prefecture.value,
        city: address.city,
        town: address.town,
        block: address.block,
      };

      const result: address = await this.prisma.address.upsert({
        where: { id },
        create: { id, account_id: accountId, ...property },
        update: property,
      });
      return addressMapper(result);
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }
}
