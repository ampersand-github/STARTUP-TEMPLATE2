import { GetServerSideProps, GetServerSidePropsContext } from "next";
import nookies from "nookies";
import { verifyIdToken } from "@/services/configs/firebase-admin-config";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { SIGN_IN_PAGE, SIGN_NO_EMAIL_VERIFIED_PAGE } from "@/services/constraints/url/page-url";

type InnerGetServerSideProps<P extends { [key: string]: unknown }> = (
  context: GetServerSidePropsContext
) => Promise<{ props: P }>;

// https://blog.hey3.dev/posts/nextjs-auth-ssr-with-mongo
export const withAuth = <P extends { [key: string]: unknown }>(
  inner?: InnerGetServerSideProps<P>
): GetServerSideProps => {
  return async (context) => {
    // クッキーからトークンを取得
    const cookies = nookies.get(context);
    const idToken = cookies.token || undefined;

    // クッキーがない場合はログインしていないとみなし、ログイン画面に飛ぶ
    if (!idToken) {
      context.res.setHeader("Location", SIGN_IN_PAGE);
      context.res.statusCode = 302;
      return inner ? inner(context) : { props: {} };
    }

    try {
      // 認証に失敗したらログイン画面に飛ぶ -> エラーケースに記述
      const verifiedIdToken: DecodedIdToken = await verifyIdToken(idToken as string);

      // email認証がしていない場合、email認証してねページへ飛ぶ
      if (!verifiedIdToken.email_verified) {
        context.res.setHeader("Location", SIGN_NO_EMAIL_VERIFIED_PAGE);
        context.res.statusCode = 302;
      }
    } catch (e) {
      // 認証失敗時はエラーで返却されるのでtry-catch文を使う
      // todo errorInfo.codeに合わせて遷移先とメッセージをつくりたい
      console.log(e);
      context.res.setHeader("Location", SIGN_IN_PAGE);
      context.res.statusCode = 302;
    }

    return inner ? inner(context) : { props: {} };
  };
};
