// Submits sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver...). Google doesn't use IndexNow; failures only warn.
//   node scripts/indexnow.mjs | --since=YYYY-MM-DD | <url>...
import { readdirSync, readFileSync } from "node:fs";

const ORIGIN = (process.env.INDEXNOW_ORIGIN ?? "https://www.usdtchhattisgarh.com").replace(/\/$/, "");
const HOST = new URL(ORIGIN).host;
const PUBLIC = new URL("../public/", import.meta.url);
const args = process.argv.slice(2);
const since = args.find((a) => a.startsWith("--since="))?.slice(8);
const explicit = args.filter((a) => !a.startsWith("--"));

const keyFile = readdirSync(PUBLIC).find((f) => /^[a-f0-9]{32,128}\.txt$/.test(f));
if (!keyFile) {
  console.warn("indexnow: no key file in public/, skipping");
  process.exit(0);
}
const key = readFileSync(new URL(keyFile, PUBLIC), "utf8").trim();

async function keyIsLive() {
  for (let i = 0; i < 20; i++) {
    const res = await fetch(`${ORIGIN}/${keyFile}`, { cache: "no-store" }).catch(() => null);
    if (res?.ok && (await res.text()).trim() === key) return true;
    await new Promise((r) => setTimeout(r, 15_000));
  }
  return false;
}

async function sitemapUrls() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`, { cache: "no-store" });
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].flatMap(([, block]) => {
    const loc = /<loc>([^<]+)<\/loc>/.exec(block)?.[1].trim();
    const lastmod = /<lastmod>([^<]+)<\/lastmod>/.exec(block)?.[1].trim();
    return loc && (!since || !lastmod || lastmod >= since) ? [loc] : [];
  });
}

try {
  if (!(await keyIsLive())) throw new Error(`${ORIGIN}/${keyFile} isn't serving the key yet`);
  const urls = [...new Set(explicit.length ? explicit : await sitemapUrls())].filter((u) => u === ORIGIN || u.startsWith(`${ORIGIN}/`));
  if (!urls.length) console.log("indexnow: nothing to submit");
  else {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key, keyLocation: `${ORIGIN}/${keyFile}`, urlList: urls }),
    });
    console.log(`indexnow: ${urls.length} URLs -> ${res.status} ${res.statusText}`);
    if (res.status >= 400) console.warn(await res.text());
  }
} catch (err) {
  console.warn(`indexnow: ${err instanceof Error ? err.message : err}`);
}
