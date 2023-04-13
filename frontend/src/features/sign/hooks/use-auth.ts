import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { fireAuth } from "@common/configs/firebase-config";
import { RecoilAtomKeys } from "@common/configs/recoil-atom-key";
import { useRouter } from "next/router";
import { SIGN_NO_EMAIL_VERIFIED_PAGE } from "@common/configs/page-url";
import { createAccountIfNeed } from "@features/sign/api/create-account-if-need";
import { signUp as signUpBase } from "@features/sign/hooks/functions/sign-up";
import { signIn as signInBase } from "@features/sign/hooks/functions/sign-in";
import { signOut as signOutBase } from "@features/sign/hooks/functions/sign-out";
import { sendEmailVerification as sendEmailVerificationBase } from "@features/sign/hooks/functions/send-verify-email";
import { User } from "firebase/auth";

export type AuthState = User | null | undefined;
const authState = atom<AuthState>({
  key: RecoilAtomKeys.AUTH_STATE,
  default: undefined,
  dangerouslyAllowMutability: true, // TypeError: Cannot freezeを回避
});

export const useAuth = () => {
  const [user, setUser] = useRecoilState(authState);
  const [isUserLoading, setIsUserLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setIsUserLoading(true);
    fireAuth.onAuthStateChanged((user: AuthState) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    setIsUserLoading(false);
  }, []);

  const signUp = async (email: string, password: string): Promise<void> => {
    setIsUserLoading(true);
    await signUpBase(email, password);
    await createAccountIfNeed(email);
    await router.push(SIGN_NO_EMAIL_VERIFIED_PAGE);
    setIsUserLoading(false);
  };

  const signIn = async (email: string, password: string): Promise<void> => {
    setIsUserLoading(true);
    await signInBase(email, password);
    await createAccountIfNeed(email);
    await router.push("/");
    setIsUserLoading(false);
  };

  const signOut = async (): Promise<void> => {
    setIsUserLoading(true);
    await signOutBase();
    await router.push("/");
    setIsUserLoading(false);
  };

  const sendEmailVerification = async () => {
    if (user) {
      await sendEmailVerificationBase(user);
    }
  };
  return { user, isUserLoading, signUp, signIn, signOut, sendEmailVerification };
};
