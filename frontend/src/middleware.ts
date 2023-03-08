import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { MAINTENANCE_PAGE } from "@/services/constraints/url/page-url";

export function middleware(request: NextRequest) {
  console.log("middleware");

  // メンテナンスモード
  if (process.env.IS_MAINTENANCE === "true")
    return NextResponse.redirect(new URL(MAINTENANCE_PAGE, request.url));

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
