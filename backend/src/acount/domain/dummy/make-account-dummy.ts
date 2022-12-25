import { Account, IAccount } from "../account";
import { AccountId } from "../account-id";

// - - - - - - - - - - - - - - - - - -
// デフォルト値
// - - - - - - - - - - - - - - - - - - - - - - - -
export const defaultAccount: IAccount = {
  something1: "something",
  something2: 10,
};

// - - - - - - - - - - - - - - - - - - - - - - - -
// テスト用インスタンス作成
// - - - - - - - - - - - - - - - - - - - - - - - -
export const makeAccountDummy = ({
  id = AccountId.create(),
  something1 = defaultAccount.something1,
  something2 = defaultAccount.something2,
}): Account => {
  return Account.reBuild({ something1: something1, something2: something2 }, id);
};
