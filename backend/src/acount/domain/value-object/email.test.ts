import { Email } from "src/acount/domain/value-object/email";

describe("Email", (): void => {
  const validEmail = "sample@gmail.com";
  const invalidEmails = ["samplegmail.com", "@gmail.com", "sample@", ""];

  describe("正常系", (): void => {
    it("メールアドレスの書式が正しい場合、正しい値が返される", () => {
      const email = new Email({ value: validEmail });
      expect(email.value).toBe(validEmail);
    });
  });

  describe("異常系", (): void => {
    invalidEmails.forEach((invalidEmail) => {
      it(`"${invalidEmail}"という書式のメールアドレスが渡された場合、エラーがスローされる`, () => {
        expect(() => new Email({ value: invalidEmail })).toThrowError(
          "メールアドレスの形式が誤っています"
        );
      });
    });
  });
});
