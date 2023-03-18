import { Account } from "../account";
import { AccountId } from "../account-id";
import { defaultAccount, makeFakeAccount } from "src/acount/domain/fake/make-fake-account";

describe("makeFakeAccount", () => {
  describe("インスタンスが生成できる", () => {
    it("指定をしない場合", () => {
      const actual = makeFakeAccount({ email: defaultAccount.email });
      expect(actual).toStrictEqual(expect.any(Account));
      expect(actual.id).toStrictEqual(expect.any(AccountId));
      expect(actual.email).toStrictEqual(defaultAccount.email);
    });
  });
});
