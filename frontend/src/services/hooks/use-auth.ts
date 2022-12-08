import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import {
  User,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
  UserCredential,
} from "@firebase/auth";
import { firebaseAuth } from "src/services/firebase-config";
import { RecoilAtomKeys } from "src/services/constraints/recoil-atom-key";
import { useRouter } from "next/router";
import { SIGN_NO_EMAIL_VERIFIED_PAGE } from "src/services/constraints/page-url";

export type IAuth = User | null;
export interface IUseAuth {
  user: IAuth;
  isUserLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  emailVerified: (user: IAuth) => Promise<void>;
}

const authState = atom<IAuth>({
  key: RecoilAtomKeys.AUTH_STATE,
  default: null,
  dangerouslyAllowMutability: true,
});

/**
 * 認証
 */
export const useAuth = (): IUseAuth => {
  const [isUserLoading, setIsUserLoading] = useState<boolean>(true);
  const [user, setUser] = useRecoilState(authState);
  const router = useRouter();

  useEffect(() => {
    setIsUserLoading(true);
    return onAuthStateChanged(firebaseAuth, async (user: IAuth) => {
      setUser(user);
      setIsUserLoading(false);

      // メール認証をしていない場合は認証メールを承認してもらうページに飛ぶ
      if (user && !user.emailVerified)
        await router.push(SIGN_NO_EMAIL_VERIFIED_PAGE);
    });
  }, []);

  /**
   * サインイン
   */
  const signIn = async (email: string, password: string) => {
    try {
      const result: UserCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      if (result.user.emailVerified) {
        await router.back();
        return;
      }

      await emailVerified(result.user);
    } catch (error) {
      console.log(error);
      alert("サインインに失敗しました。");
    }
  };

  /**
   * サインアップ
   */
  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      await emailVerified(user);
    } catch (error) {
      alert("サインアップに失敗しました。");
    }
  };

  /**
   * ログアウト
   */
  const logout = async () => {
    try {
      await signOut(firebaseAuth);
    } catch (error) {
      alert("サインアウトに失敗しました。");
    }
  };

  /**
   * Email認証
   */
  const emailVerified = async (user: IAuth) => {
    try {
      if (!user) return; // userがnullならメールの送り先がないのでこの関数は不要
      if (firebaseAuth.currentUser?.emailVerified === true) return; // 認証されているなら不要
      await sendEmailVerification(user);
      await router.push(SIGN_NO_EMAIL_VERIFIED_PAGE);
    } catch (error) {
      alert("Email認証のメール送信に失敗しました。");
    }
  };

  return { user, isUserLoading, signIn, signUp, logout, emailVerified };
};
