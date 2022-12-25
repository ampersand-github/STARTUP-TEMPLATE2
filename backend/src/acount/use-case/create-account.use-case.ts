import { Account } from "src/acount/domain/account";
import { AccountId } from "src/acount/domain/account-id";
import { AccountRepository } from "../repository/account.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateAccountUseCase {
  constructor(private readonly accountRepository: AccountRepository) {}

  public async execute(id: string): Promise<void> {
    const accountId = AccountId.reBuild(id);
    const count = await this.accountRepository.count(accountId);
    if (count !== 0) return;
    const account = Account.reBuild({}, accountId);
    await this.accountRepository.save(account);
  }
}
