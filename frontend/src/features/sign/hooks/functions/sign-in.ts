import { fireAuth } from "@common/configs/firebase-config";
import { FirebaseError } from "@firebase/app";
import { selectErrorMessage } from "@features/sign/hooks/functions/select-error-message";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(fireAuth, email, password);
  } catch (e) {
    e instanceof FirebaseError
      ? toast.error(selectErrorMessage(e))
      : toast.error("ログインに失敗しました");
  }
};
