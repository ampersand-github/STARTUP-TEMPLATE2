import { AccountId } from "src/acount/domain/account-id";
import { Account } from "../domain/account";
import { AccountRepository } from "../repository/account.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  public async execute(id: string): Promise<Account> {
    try {
      const accountId = AccountId.reBuild(id);
      return await this.accountRepository.findOne(accountId);
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }
  }
}
