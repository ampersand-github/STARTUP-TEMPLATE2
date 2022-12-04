import { SignForm } from "src/components/organisms/sign/index";
import { useAuth } from "src/services/hooks/use-auth";
import { useRouter } from "next/router";

export interface ISignFormContainer {
  text: string;
}
export const SignFormContainer = ({ text }: ISignFormContainer) => {
  const { user, signIn } = useAuth();
  const router = useRouter();

  return SignForm({
    text,
    user,
    signIn,
    router,
  });
};
