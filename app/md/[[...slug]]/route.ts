import { docMarkdown, homeMarkdown, notFoundMarkdown } from "@/lib/markdown";
import { DOCS, type DocSlug } from "@/lib/pages";
import { SITE_URL } from "@/lib/site";

export async function GET(_req: Request, ctx: RouteContext<"/md/[[...slug]]">) {
  const { slug = [] } = await ctx.params;
  const path = `/${slug.join("/")}`;
  const page = slug.length === 0 ? homeMarkdown() : slug.length === 1 && slug[0] in DOCS ? docMarkdown(slug[0] as DocSlug) : null;
  return new Response(page ?? notFoundMarkdown(path), {
    status: page ? 200 : 404,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      ...(page && { Link: `<${SITE_URL}${path === "/" ? "/" : path}>; rel="canonical"` }),
    },
  });
}
