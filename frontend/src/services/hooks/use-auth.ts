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
  const router = useRouter();
  const [isUserLoading, setIsUserLoading] = useState<boolean>(true);
  const [user, setUser] = useRecoilState(authState);

  useEffect(() => {
    setIsUserLoading(true);
    return onAuthStateChanged(firebaseAuth, async (user: IAuth) => {
      setUser(user);
      setIsUserLoading(false);

      // メール認証をしていない場合は認証メールを承認してもらうページに飛ぶ
      if (user && !user.emailVerified) await router.push(SIGN_NO_EMAIL_VERIFIED_PAGE);
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

      // 認証済みユーザーは一つ前の画面に戻る
      if (result.user.emailVerified) {
        await router.back();
        return;
      }
      await emailVerified(result.user);
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
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      await emailVerified(user); // signUp時点ではemail認証していないので強制的にEmail認証させる
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
      if (user.emailVerified) return; // 認証されているなら不要
      await sendEmailVerification(user);
      await router.push(SIGN_NO_EMAIL_VERIFIED_PAGE);
    } catch (error) {
      alert("Email認証のメール送信に失敗しました。");
    }
  };

  return { user, isUserLoading, signIn, signUp, logout, emailVerified };
};
