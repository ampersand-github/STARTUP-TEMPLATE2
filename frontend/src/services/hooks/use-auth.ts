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
import { firebaseAuth } from "src/services/configs/firebase-config";
import { RecoilAtomKeys } from "src/services/constraints/recoil/recoil-atom-key";
import { useRouter } from "next/router";
import { SIGN_NO_EMAIL_VERIFIED_PAGE } from "src/services/constraints/url/page-url";
import { FirebaseError } from "@firebase/app";
import { UseCreateAccount } from "@/services/hooks/api/use-create-account";
import { selectErrorMessage } from "../lib/auth/select-error-message";

export type IAuth = User | null;
export interface IUseAuth {
  user: IAuth;
  isUserLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  sendVerifyEmail: (user: User) => Promise<void>;
  refreshIdToken: (user: User) => Promise<void>;
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
  const router = useRouter();
  const [isUserLoading, setIsUserLoading] = useState<boolean>(true);
  const [user, setUser] = useRecoilState(authState);
  const { mutate } = UseCreateAccount();
  const [isAccountTableCreated, setIsAccountTableCreated] = useState<boolean>(false);
  const signApiUrl = "/api/sign";
  const logoutApiUrl = "/api/sign-out";

  useEffect(() => {
    setIsUserLoading(true);

    // 新規登録した人のためにアカウントテーブルをつくる
    // if (user && user.emailVerified && !isAccountTableCreated) {
    if (user && user.emailVerified && !isAccountTableCreated) {
      mutate();
      setIsAccountTableCreated(true);
    }

    return onAuthStateChanged(firebaseAuth, async (user: IAuth) => {
      setUser(user);

      // メール認証をしていない場合は認証メールを承認してもらうページに飛ぶ
      if (user && !user.emailVerified) await jumpToEmailVerifiedPageIfNotVerified();

      setIsUserLoading(false);
    });
  }, []);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      // console.log("force refresh the token every 10 minutes");
      const user = firebaseAuth.currentUser;
      if (user) await refreshIdToken(user);
    }, 10 * 60 * 1000);
    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  /**
   * サインイン
   */
  const signIn = async (email: string, password: string) => {
    try {
      // firebaseでサインイン
      const result: UserCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      // アカウントテーブルがなかったらつくる
      mutate();

      // トークンをApiRoute経由でクッキーに保存する(サーバーサイドクッキー)
      const idToken = await result.user.getIdToken(true);
      await fetch(signApiUrl, { method: "POST", body: idToken });

      // トップページに戻る
      await router.push("/");
    } catch (e) {
      e instanceof FirebaseError ? alert(selectErrorMessage(e)) : alert("ログインに失敗しました");
    }
  };

  /**
   * サインアップ
   */
  const signUp = async (email: string, password: string) => {
    try {
      setIsAccountTableCreated(false); // 念の為falseにする。

      // firebaseでサインアップ
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);

      // signUp時点ではemail認証していないので強制的にEmail認証させる
      await jumpToEmailVerifiedPageIfNotVerified();

      // テーブルがなければ作成する。メール認証していないが、
      // メール認証していなければ、動かせないのでこのタイミングで作成しても問題ない
      mutate();

      // トークンをApiRoute経由でクッキーに保存する(サーバーサイドクッキー)
      const idToken = await userCredential.user.getIdToken(true);
      await fetch(signApiUrl, { method: "POST", body: idToken });
    } catch (e) {
      e instanceof FirebaseError ? alert(selectErrorMessage(e)) : alert("ログインに失敗しました");
    }
  };

  /**
   * ログアウト
   */
  const logout = async () => {
    if (!user) return;
    try {
      await fetch(logoutApiUrl, { method: "DELETE" });
      await signOut(firebaseAuth);
      await router.push("/");
    } catch (error) {
      alert("サインアウトに失敗しました。");
    }
  };

  /**
   * Email認証
   */
  const sendVerifyEmail = async (user: User) => {
    if (!user.emailVerified) await sendEmailVerification(user);
  };

  const jumpToEmailVerifiedPageIfNotVerified = async () => {
    await router.push(SIGN_NO_EMAIL_VERIFIED_PAGE);
  };

  /**
   * idTokenの更新
   */
  const refreshIdToken = async (user: User) => {
    const newToken = await user.getIdToken(true);
    await fetch(signApiUrl, { method: "POST", body: newToken });
  };

  return {
    user,
    isUserLoading,
    signIn,
    signUp,
    logout,
    sendVerifyEmail,
    refreshIdToken,
  };
};
