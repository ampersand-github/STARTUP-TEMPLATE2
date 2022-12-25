import { Inject, Injectable } from "@nestjs/common";
import { Account } from "../domain/account";
import { AccountId } from "../domain/account-id";
import { IAccountRepository } from "../domain/interface/account.repository.interface";

@Injectable()
export class CreateAccountUseCase {
  constructor(
    @Inject("AccountRepositoryProvide") private readonly accountRepository: IAccountRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const accountId = AccountId.reBuild(id);
    const count = await this.accountRepository.count(accountId);
    if (count !== 0) return;
    const account = Account.reBuild({ something1: "", something2: 1 }, accountId);
    await this.accountRepository.save(account);
  }
}
