import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { MAINTENANCE_PAGE } from "@common/configs/page-url";

export function middleware(request: NextRequest) {
  // console.log("middleware");

  // ベーシック認証
  // console.log("ベーシック認証");
  const isAuthorized = authorizeBasicAuth(request);
  if (!isAuthorized)
    return new Response(`Basic Auth Required.`, {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });

  // メンテナンスモード
  // console.log("メンテナンスモード");
  if (process.env.IS_MAINTENANCE === "true")
    return NextResponse.redirect(new URL(MAINTENANCE_PAGE, request.url));

  //
  return NextResponse.next();
}

export const config = {
  // https://nextjs.org/docs/advanced-features/middleware のmather参照のこと
  // メンテナンスページ含め、いくつかのURLを除くURLにマッチした場合にミドルウェア発動
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   * - /maintenance
   */
  matcher: "/((?!api|_next/static|_next/image|favicon.ico|maintenance).*)",
};

const authorizeBasicAuth = (request: NextRequest): boolean => {
  if (process.env.IS_BASIC_AUTH === "true") {
    const basicAuth = request.headers.get("authorization");
    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, password] = atob(authValue).split(":");
      // console.log(user,password)
      const envUser = process.env.IS_BASIC_AUTH_USER;
      const envPassword = process.env.IS_BASIC_AUTH_PASSWORD;
      if (user === envUser && password === envPassword) return true;
    }
    return false;
  }
  return true;
};
