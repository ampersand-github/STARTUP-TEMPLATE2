import { Email } from "./value-object/email";
import { Account, IAccount } from "./account";
import { AccountId } from "./account-id";

describe("Account", () => {
  const props: IAccount = {
    email: new Email({ value: "sample@gmail.com" }),
  };

  describe("オブジェクトの生成", () => {
    it("createできる", () => {
      const actual = Account.create(props);
      expect(actual).toStrictEqual(expect.any(Account));
    });

    it("reBuildできる", () => {
      const id = "1234567-0000-1234-1111-123456789012";
      const accountId = AccountId.reBuild(id);
      const actual = Account.reBuild(props, accountId);
      expect(actual).toStrictEqual(expect.any(Account));
      expect(actual.id.toString()).toStrictEqual(id);
    });
  });

  describe("値を取得できる", () => {
    it("値を取得できる", () => {
      const actual = Account.create(props);
      expect(actual.email).toStrictEqual(props.email);
    });
  });
});
