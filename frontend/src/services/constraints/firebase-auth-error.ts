export interface IAuthError {
  code: string;
  message: string;
}
export const authErrorList: IAuthError[] = [
  {
    code: "auth/invalid-email",
    message: "メールアドレスの形式が間違っています",
  },
  { code: "auth/weak-password", message: "パスワードの強度を上げてください" },
  { code: "auth/user-disabled", message: "ユーザーが無効です" },
  { code: "auth/user-not-found", message: "ユーザーが存在しません" },
  { code: "auth/wrong-password", message: "パスワードが間違っています" },
  {
    code: "auth/too-many-requests",
    message: "時間をおいて再度、お試しください",
  },
  {
    code: "auth/email-already-in-use",
    message: "メールアドレスはすでに登録されています",
  },
];
