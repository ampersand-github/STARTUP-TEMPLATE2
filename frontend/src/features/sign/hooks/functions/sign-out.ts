import { fireAuth } from "@common/configs/firebase-config";
import { signOut as firebaseSignOut } from "@firebase/auth";
import { FirebaseError } from "@firebase/app";
import { selectErrorMessage } from "@features/sign/hooks/functions/select-error-message";
import { toast } from "react-toastify";

export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(fireAuth);
  } catch (e) {
    e instanceof FirebaseError
      ? toast.error(selectErrorMessage(e))
      : toast.error("ログインに失敗しました");
  }
};
