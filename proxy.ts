import { NextResponse, type NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  if (!/text\/markdown(?!\s*;\s*q=0(\.0*)?\b)/.test(req.headers.get("accept") ?? "")) return;
  const path = req.nextUrl.pathname === "/" ? "" : req.nextUrl.pathname;
  return NextResponse.rewrite(new URL(`/md${path}`, req.url));
}

export const config = {
  matcher: ["/((?!_next/|md/|opengraph-image|twitter-image|.*\\.).*)"],
};
