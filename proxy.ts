import { NextResponse, type NextRequest } from "next/server";

function q(accept: string, type: RegExp) {
  return Math.max(
    0,
    ...accept
      .split(",")
      .map((part) => part.trim().split(/\s*;\s*/))
      .filter(([t]) => type.test(t))
      .map(([, ...params]) => Number(params.find((p) => p.startsWith("q="))?.slice(2) ?? 1)),
  );
}

function wantsMarkdown(accept: string | null) {
  if (!accept) return false;
  const md = q(accept, /^text\/markdown$/);
  return md > 0 && md >= q(accept, /^text\/html$/);
}

export function proxy(req: NextRequest) {
  if (wantsMarkdown(req.headers.get("accept"))) {
    const path = req.nextUrl.pathname === "/" ? "" : req.nextUrl.pathname;
    return NextResponse.rewrite(new URL(`/md${path}`, req.url));
  }
}

export const config = {
  matcher: ["/((?!_next/|md/|opengraph-image|twitter-image|.*\\.).*)"],
};
