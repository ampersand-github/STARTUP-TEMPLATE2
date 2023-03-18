import { Account, IAccount } from "../account";
import { AccountId } from "../account-id";
import { Email } from "../value-object/email";

// - - - - - - - - - - - - - - - - - -
// デフォルト値
// - - - - - - - - - - - - - - - - - - - - - - - -
export const defaultAccount: IAccount = {
  email: new Email({ value: "sample@gmail.com" }),
};

// - - - - - - - - - - - - - - - - - - - - - - - -
// テスト用インスタンス作成
// - - - - - - - - - - - - - - - - - - - - - - - -
export const makeFakeAccount = ({
  id = AccountId.create(),
  email = defaultAccount.email,
}): Account => {
  return Account.reBuild({ email }, id);
};
