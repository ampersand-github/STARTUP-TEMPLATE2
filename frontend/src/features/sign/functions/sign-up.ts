import { firebaseAuth } from "@common/configs/firebase-config";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { FirebaseError } from "@firebase/app";
import { selectErrorMessage } from "@common/lib/auth/select-error-message";
import { toast } from "react-toastify";

export const signUp = async (email: string, password: string): Promise<void> => {
  try {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
  } catch (e) {
    e instanceof FirebaseError
      ? toast.error(selectErrorMessage(e))
      : toast.error("ログインに失敗しました");
  }
};
