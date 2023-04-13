import { fireAuth } from "@common/configs/firebase-config";
import { createUserWithEmailAndPassword, UserCredential } from "@firebase/auth";
import { FirebaseError } from "@firebase/app";
import { selectErrorMessage } from "@features/sign/hooks/functions/select-error-message";
import { toast } from "react-toastify";

export const signUp = async (email: string, password: string): Promise<UserCredential> => {
  try {
    return await createUserWithEmailAndPassword(fireAuth, email, password);
  } catch (e) {
    e instanceof FirebaseError
      ? toast.error(selectErrorMessage(e))
      : toast.error("ログインに失敗しました");
    throw new Error("ログインに失敗しました");
  }
};
