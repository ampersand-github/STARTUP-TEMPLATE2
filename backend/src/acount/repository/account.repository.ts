import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/module/prisma/prisma.service";
import { Account } from "../domain/account";
import { AccountId } from "../domain/account-id";
import { IAccountRepository } from "../domain/interface/account.repository.interface";

@Injectable()
export class AccountRepository implements IAccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async count(id: AccountId): Promise<number> {
    return await this.prisma.accounts.count({ where: { id: id.toString() } });
  }

  public async findOne(id: AccountId): Promise<Account> {
    try {
      const result = await this.prisma.accounts.findUnique({ where: { id: id.toString() } });
      return await Account.reBuild({ something1: "", something2: 1 }, AccountId.reBuild(result.id));
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  public async getAll(): Promise<Account[]> {
    this.prisma.address.findUnique({
      where: {
        accountId: "",
      },
    });
    this.prisma.accounts.findUnique({
      where: { id: "" },
      include: { address: true },
    });
    return Promise.resolve([]);
  }

  public async save(account: Account): Promise<any> {
    return await this.prisma.accounts.create({ data: { id: account.id.toString() } });
  }
}
