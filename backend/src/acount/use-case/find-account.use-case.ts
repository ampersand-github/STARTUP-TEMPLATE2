import { Account } from "../domain/account";
import { Inject, Injectable } from "@nestjs/common";
import { IAccountRepository } from "../domain/interface/account.repository.interface";
import { AccountId } from "../domain/account-id";

@Injectable()
export class FindAccountUseCase {
  constructor(
    @Inject("AccountRepositoryProvide") private readonly accountRepository: IAccountRepository
  ) {}

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
