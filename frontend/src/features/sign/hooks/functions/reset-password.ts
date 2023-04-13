import { sendPasswordResetEmail } from "firebase/auth";
import { FirebaseError } from "@firebase/app";
import { Result } from "@common/interface/result";
import { selectErrorMessage } from "@features/sign/hooks/functions/select-error-message";
import { fireAuth } from "@common/configs/firebase-config";

export const resetPassword = async (email: string): Promise<Result<string>> => {
  try {
    await sendPasswordResetEmail(fireAuth, email);
    return { isOk: true };
  } catch (e) {
    return e instanceof FirebaseError
      ? { isOk: false, value: selectErrorMessage(e) }
      : { isOk: false, value: `${email}に送信できませんでした` };
  }
};
