import { SignForm } from "src/components/organisms/sign/index";
import { useAuth } from "src/services/hooks/use-auth";
import { useRouter } from "next/router";

export type ISignType = "sign-up" | "sign-in";
export interface ISignFormContainer {
  text: string;
  signType: ISignType;
}
export const SignFormContainer = ({ text, signType }: ISignFormContainer) => {
  const { user, signIn, signUp } = useAuth();
  const router = useRouter();

  return SignForm({
    text,
    user,
    signIn: signType === "sign-in" ? signIn : undefined,
    signUp: signType === "sign-up" ? signUp : undefined,
    router,
  });
};
