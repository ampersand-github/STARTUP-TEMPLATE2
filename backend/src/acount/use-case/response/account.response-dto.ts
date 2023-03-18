import { Account } from "src/acount/domain/account";

export class AccountResponseDto {
  private readonly email: string;
  public constructor(account: Account) {
    this.email = account.email.value;
  }
}
