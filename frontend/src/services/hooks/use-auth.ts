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
import { authErrorList } from "src/services/constraints/firebase-auth-error";
import { UseCreateAccount } from "@/services/hooks/api/use-create-account";
import nookies from "nookies";

export type IAuth = User | null;
export interface IUseAuth {
  user: IAuth;
  isUserLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  sendVerifyEmail: (user: User) => Promise<void>;
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
  const idTokenUrl = "/api/id-token/save-id-token";

  useEffect(() => {
    setIsUserLoading(true);

    // 新規登録した人のためにアカウントテーブルをつくる
    // if (user && user.emailVerified && !isAccountTableCreated) {
    if (user && user.emailVerified && !isAccountTableCreated) {
      mutate();
      setIsAccountTableCreated(true);
    }

    return onAuthStateChanged(firebaseAuth, async (user: IAuth) => {
      console.log("onAuthStateChanged", user?.uid);
      setUser(user);

      // メール認証をしていない場合は認証メールを承認してもらうページに飛ぶ
      if (user && !user.emailVerified) await jumpToEmailVerifiedPageIfNotVerified();
      setIsUserLoading(false);
    });
  }, []);

  useEffect(() => {
    return firebaseAuth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "session", "", { path: "/" });
      } else {
        setUser(user);
        const newToken = await user.getIdToken(true);
        await fetch(idTokenUrl, { method: "POST", body: newToken });
      }
    });
  }, []);
  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebaseAuth.currentUser;
      if (user) {
        const newToken = await user.getIdToken(true);
        await fetch(idTokenUrl, { method: "POST", body: newToken });
      }
    }, 10 * 60 * 1000);
    // clean up setInterval
    return () => clearInterval(handle);
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

      // アカウントテーブルがなかったらつくる
      mutate();

      const id = await result.user.getIdToken();
      await fetch(idTokenUrl, { method: "POST", body: id });
      // 認証済みユーザーは一つ前の画面に戻る
      /*
      if (result.user.emailVerified) {
        await router.back();
        return;
      } else {
        await jumpToEmailVerifiedPageIfNotVerified();
      }
  */
    } catch (e) {
      if (e instanceof FirebaseError) {
        // エラーからエラーコードを探す
        const code = e.code;
        const mayBeAuthError = authErrorList.find((one) => one.code === code);

        // 一致したらアラートを出す
        if (mayBeAuthError) {
          alert(mayBeAuthError.message);
          return; // 下のアラートと重ならないための処理
        }
      }

      alert("ログインに失敗しました");
    }
  };

  /**
   * サインアップ
   */
  const signUp = async (email: string, password: string) => {
    try {
      setIsAccountTableCreated(false); // 念の為falseにする。
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      // signUp時点ではemail認証していないので強制的にEmail認証させる
      await jumpToEmailVerifiedPageIfNotVerified();
      // テーブルがなければ作成する。メール認証していないが、
      // メール認証していなければ、動かせないのでこのタイミングで作成しても問題ない
      mutate();
    } catch (e) {
      if (e instanceof FirebaseError) {
        // エラーからエラーコードを探す
        const code = e.code;
        const mayBeAuthError = authErrorList.find((one) => one.code === code);

        // 一致したらアラートを出す
        if (mayBeAuthError) {
          alert(mayBeAuthError.message);
          return; // 下のアラートと重ならないための処理
        }
      }
      alert("新規の登録に失敗しました");
    }
  };

  /**
   * ログアウト
   */
  const logout = async () => {
    try {
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

  return { user, isUserLoading, signIn, signUp, logout, sendVerifyEmail };
};
