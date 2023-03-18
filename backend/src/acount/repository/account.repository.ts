import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/module/prisma/prisma.service";
import { Account } from "../domain/account";
import { AccountId } from "../domain/account-id";
import { IAccountRepository } from "../domain/interface/account.repository.interface";
import { Email } from "src/acount/domain/value-object/email";

@Injectable()
export class AccountRepository implements IAccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async count(id: AccountId): Promise<number> {
    return this.prisma.accounts.count({ where: { id: id.toString() } });
  }

  public async findOne(id: AccountId): Promise<Account> {
    try {
      const result = await this.prisma.accounts.findUnique({ where: { id: id.toString() } });

      const email = new Email({ value: result.email });
      return await Account.reBuild({ email: email }, AccountId.reBuild(result.id));
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }

  public async save(account: Account): Promise<any> {
    return this.prisma.accounts.create({
      data: { id: account.id.toString(), email: account.email.value },
    });
  }
}
