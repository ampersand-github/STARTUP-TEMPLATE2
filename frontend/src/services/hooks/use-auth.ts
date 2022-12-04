import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import {
  User,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { firebaseAuth } from "src/services/firebase-config";
import { RecoilAtomKeys } from "src/services/constraints/recoil-atom-key";

export type IAuth = User | null;
export interface IUseAuth {
  user: IAuth;
  isUserLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
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

  useEffect(() => {
    setIsUserLoading(true);
    return onAuthStateChanged(firebaseAuth, (user: IAuth) => {
      setUser(user);
      setIsUserLoading(false);
    });
  }, []);

  /**
   * サインイン
   */
  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      alert("サインイン認証に失敗しました。");
    }
  };

  /**
   * サインアップ
   */
  // todo 後で書く

  /**
   * ログアウト
   */
  const logout = async () => {
    try {
      await signOut(firebaseAuth);
    } catch (error) {
      alert("サインアウト認証に失敗しました。");
    }
  };

  return { user, isUserLoading, signIn, logout };
};
