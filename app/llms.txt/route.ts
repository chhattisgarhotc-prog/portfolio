import { CITIES, FAQS, PHONE_DISPLAY, SITE_DESCRIPTION, SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${SITE_NAME} is a regional over-the-counter (OTC) desk for buying and selling USDT (Tether) in Chhattisgarh, India. Trades settle by Cash Deposit Machine (CDM) or in-person counter cash, with USDT released on Tron (TRC20) or BNB Smart Chain (BEP20). All counterparties complete identity verification under PMLA before execution.

## Key facts

- Minimum ticket: 100 USDT
- Networks: TRC20, BEP20
- Settlement time: 15 to 30 minutes after deposit confirmation
- Hours: Monday to Sunday, 10:00 AM to 9:00 PM IST
- Phone: ${PHONE_DISPLAY}
- WhatsApp: ${WHATSAPP_URL}

## Cities served

${CITIES.map((c) => `- ${c.name}: ${c.role}`).join("\n")}

## Pages

- [Home](${SITE_URL}/): Services, coverage, process, compliance and FAQ
- [Services](${SITE_URL}/#services): CDM settlements and in-person counter cash
- [Network](${SITE_URL}/#network): City coverage across Chhattisgarh
- [How it works](${SITE_URL}/#process): Three-step execution model
- [Compliance](${SITE_URL}/#compliance): KYC, PMLA and tax disclosures
- [FAQ](${SITE_URL}/#faq): Common questions

## FAQ

${FAQS.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Compliance

Virtual Digital Assets are taxed at 30% under Section 115BBH and attract 1% TDS under Section 194S of the Income Tax Act. ${SITE_NAME} does not process unverified or third-party funds.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
