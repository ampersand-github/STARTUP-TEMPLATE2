import nookies from "nookies";
import { GetServerSidePropsContext } from "next/types";
import { SIGN_IN_PAGE, SIGN_NO_EMAIL_VERIFIED_PAGE } from "@/services/constraints/url/page-url";
import { axiosConfig } from "@/services/configs/axios-config";
import axios from "axios";

// 認証済みユーザーのみアクセスを許可する
export const allowAccessToAuthUser = async (context: GetServerSidePropsContext) => {
  console.log("allowAccessToAuthUser");
  const cookies = nookies.get(context);
  const idToken = cookies.session || null;

  // tokenがない場合はログインページへ
  if (!idToken)
    return {
      redirect: {
        permanent: false,
        destination: SIGN_IN_PAGE,
      },
    };

  // VerifiedState
  const verifiedState = await axios.post("/auth", { idToken: idToken }, await axiosConfig());

  if (!verifiedState.data.isVerify)
    return {
      redirect: {
        permanent: false,
        destination: SIGN_IN_PAGE,
      },
    };

  if (!verifiedState.data.isEmailVerified)
    return {
      redirect: {
        permanent: false,
        destination: SIGN_NO_EMAIL_VERIFIED_PAGE,
      },
    };

  return;
};
