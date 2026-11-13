import assert from "node:assert/strict";

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const get = (path, accept = "text/html") => fetch(base + path, { headers: { Accept: accept } });
const checks = [];
const check = (name, fn) => checks.push([name, fn]);

check("homepage HTML metadata", async () => {
  const res = await get("/");
  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type"), /text\/html/);
  const html = await res.text();
  for (const re of [/<html lang="en-IN"/, /<link rel="canonical"/, /property="og:image"/, /property="og:type"/, /name="twitter:card"/]) assert.match(html, re);
  const ld = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  const org = ld["@graph"].find((n) => [].concat(n["@type"]).includes("Organization"));
  assert.ok(org.contactPoint?.telephone && org.contactPoint.contactType);
  assert.equal(org.address?.["@type"], "PostalAddress");
  assert.ok(org.knowsAbout.length);
});

check("homepage Markdown negotiation", async () => {
  const res = await get("/", "text/markdown");
  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type"), /^text\/markdown/);
  assert.match(res.headers.get("vary") ?? "", /\bAccept\b/i);
  assert.match(await res.text(), /^# USDT Chhattisgarh/);
});

check("Markdown 404", async () => {
  const res = await get("/__verify-404-probe", "text/markdown");
  assert.equal(res.status, 404);
  assert.match(res.headers.get("content-type"), /^text\/markdown/);
  const body = await res.text();
  assert.ok(body.length >= 20);
  assert.match(body, /llms\.txt/);
});

check("HTML 404", async () => assert.equal((await get("/__verify-404-probe")).status, 404));

check("robots.txt", async () => {
  const body = await (await get("/robots.txt", "text/plain")).text();
  assert.match(body, /Sitemap: https?:\/\/\S+\/sitemap\.xml/);
  assert.doesNotMatch(body, /Disallow: \/\s*$/m);
});

check("sitemap.xml", async () => {
  const body = await (await get("/sitemap.xml", "application/xml")).text();
  for (const p of ["/", "/about", "/contact", "/privacy"]) assert.match(body, new RegExp(`<loc>[^<]+${p === "/" ? "/" : p}</loc>`));
  assert.match(body, /<lastmod>/);
});

check("llms.txt", async () => {
  const body = await (await get("/llms.txt", "text/plain")).text();
  assert.match(body, /^# USDT Chhattisgarh\n\n> /);
  assert.match(body, /## When to use/);
});

for (const p of ["/about", "/contact", "/privacy"]) {
  check(`${p} HTML and Markdown`, async () => {
    const res = await get(p);
    assert.equal(res.status, 200);
    const text = (await res.text()).match(/<main[^>]*>(.*?)<\/main>/s)[1].replace(/<[^>]+>/g, " ");
    assert.ok(text.replace(/\s+/g, " ").length >= 500, `${p} main text too short`);
    const md = await get(p, "text/markdown");
    assert.equal(md.status, 200);
    assert.match(md.headers.get("content-type"), /^text\/markdown/);
  });
}

let failed = 0;
for (const [name, fn] of checks) {
  try {
    await fn();
    console.log(`PASS ${name}`);
  } catch (e) {
    failed++;
    console.log(`FAIL ${name}: ${e.message}`);
  }
}
process.exit(failed ? 1 : 0);
