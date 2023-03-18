import { Inject, Injectable } from "@nestjs/common";
import { Account } from "../domain/account";
import { AccountId } from "../domain/account-id";
import { IAccountRepository } from "../domain/interface/account.repository.interface";
import { SaveAccountRequestDto } from "src/acount/controller/request/save-account.request-dto";
import { Email } from "../domain/value-object/email";

@Injectable()
export class CreateAccountUseCase {
  constructor(
    @Inject("AccountRepositoryProvide") private readonly accountRepository: IAccountRepository
  ) {}

  public async execute(id: string, dto: SaveAccountRequestDto): Promise<void> {
    const accountId = AccountId.reBuild(id);
    const count = await this.accountRepository.count(accountId);
    if (count !== 0) return;

    const email = new Email({ value: dto.email });
    const account = Account.reBuild({ email: email }, accountId);
    await this.accountRepository.save(account);
  }
}
