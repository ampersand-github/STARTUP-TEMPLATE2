import { SignForm } from "src/components/organisms/sign/index";
import { useAuth } from "src/services/hooks/use-auth";

export interface ISignFormContainer {
  text: string;
}
export const SignFormContainer = ({ text }: ISignFormContainer) => {
  const { user, signIn } = useAuth();

  return SignForm({
    text,
    user,
    signIn,
  });
};
