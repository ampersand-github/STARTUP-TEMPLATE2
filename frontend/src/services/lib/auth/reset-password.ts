import { firebaseAuth } from "@/services/configs/firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";
import { FirebaseError } from "@firebase/app";
import { Result } from "src/services/interface/result";
import { selectErrorMessage } from "./select-error-message";

export const resetPassword = async (email: string): Promise<Result> => {
  try {
    await sendPasswordResetEmail(firebaseAuth, email);
    return { isOk: true };
  } catch (e) {
    return e instanceof FirebaseError
      ? { isOk: false, message: selectErrorMessage(e) }
      : { isOk: false, message: `${email}に送信できませんでした` };
  }
};
