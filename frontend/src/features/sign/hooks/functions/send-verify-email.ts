import { User } from "firebase/auth";
import { sendEmailVerification as firebaseEmailVerification } from "@firebase/auth";
import { FirebaseError } from "@firebase/app";
import { toast } from "react-toastify";
import { selectErrorMessage } from "@features/sign/hooks/functions/select-error-message";

export const sendEmailVerification = async (user: User) => {
  try {
    await firebaseEmailVerification(user);
  } catch (e) {
    e instanceof FirebaseError
      ? toast.error(selectErrorMessage(e))
      : toast.error("ログインに失敗しました");
  }
};
