import { Account } from "../account";
import { AccountId } from "../account-id";
import { defaultAccount, makeAccountDummy } from "./make-account-dummy";

describe("makeAccountDummy", () => {
  describe("インスタンスが生成できる", () => {
    it("指定をしない場合", () => {
      const actual = makeAccountDummy({});
      expect(actual).toStrictEqual(expect.any(Account));
      expect(actual.id).toStrictEqual(expect.any(AccountId));
      expect(actual.something1).toStrictEqual(defaultAccount.something1);
      expect(actual.something2).toStrictEqual(defaultAccount.something2);
    });
    it("指定をする場合", () => {
      const id = AccountId.create();
      const something1 = "string";
      const something2 = 100;
      const actual = makeAccountDummy({ id: id, something1: something1, something2: something2 });
      expect(actual).toStrictEqual(expect.any(Account));
      expect(actual.id).toStrictEqual(expect.any(AccountId));
      expect(actual.id).toStrictEqual(id);
      expect(actual.something1).not.toStrictEqual(defaultAccount.something1);
      expect(actual.something1).toStrictEqual(something1);
      expect(actual.something2).not.toStrictEqual(defaultAccount.something2);
      expect(actual.something2).toStrictEqual(something2);
    });
  });
});
