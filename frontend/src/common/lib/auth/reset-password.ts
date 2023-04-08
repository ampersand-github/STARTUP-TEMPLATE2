import { sendPasswordResetEmail } from "firebase/auth";
import { FirebaseError } from "@firebase/app";
import { Result } from "src/common/interface/result";
import { selectErrorMessage } from "src/common/lib/auth/select-error-message";
import { firebaseAuth } from "@common/configs/firebase-config";

export const resetPassword = async (email: string): Promise<Result<string>> => {
  try {
    await sendPasswordResetEmail(firebaseAuth, email);
    return { isOk: true };
  } catch (e) {
    return e instanceof FirebaseError
      ? { isOk: false, value: selectErrorMessage(e) }
      : { isOk: false, value: `${email}に送信できませんでした` };
  }
};
