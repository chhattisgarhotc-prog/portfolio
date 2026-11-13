import { HOURS, SITE_NAME } from "@/lib/site";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  answer: string;
  sections: { heading: string; paragraphs: string[] }[];
  sources: { label: string; url: string }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "usdt-tax-tds-india",
    title: "USDT Tax and TDS in India: 30% Tax, 1% TDS",
    description:
      "Who pays the 30% tax, who deducts 1% TDS in a P2P or OTC trade, and how to report USDT under the Income-tax Act, 2025.",
    updated: "2026-11-13",
    answer:
      "Income from transferring USDT is taxed at a flat 30%, plus any surcharge and 4% cess, with no deduction except the cost of acquisition and no set-off of losses. The person who pays for the USDT deducts 1% TDS once the year's payments cross ₹50,000 (₹10,000 for some payers). Since 1 April 2026 these rules sit in Sections 194 and 393 of the Income-tax Act, 2025, which replaced Sections 115BBH and 194S of the 1961 Act.",
    sections: [
      {
        heading: "Which law applies to USDT trades in 2026?",
        paragraphs: [
          "The Income-tax Act, 2025 came into force on 1 April 2026 and replaced the Income-tax Act, 1961. USDT falls within its definition of a virtual digital asset (VDA) in Section 2(111), which now expressly covers crypto-assets.",
          "Trades made up to 31 March 2026 are still governed by Section 115BBH (tax) and Section 194S (TDS) of the 1961 Act. Trades from 1 April 2026 fall under Section 194(1), Table Sl. No. 4 (tax) and Section 393(1), Table Sl. No. 8(vi) (TDS) of the 2025 Act. The rules carried over unchanged in substance.",
        ],
      },
      {
        heading: "How is profit on USDT taxed?",
        paragraphs: [
          "Income from the transfer of any VDA is taxed at 30%, whatever your income slab. The Income Tax Department adds that applicable surcharge and 4% Health and Education Cess apply on top.",
          "The only deduction allowed is the cost of acquisition. You cannot deduct fees or other expenses, and a loss on a VDA cannot be set off against any other income or carried forward to later years.",
          "Example: you buy USDT for ₹1,00,000 and later sell it for ₹1,03,000. The ₹3,000 gain is taxed at 30%, which is ₹900 before surcharge and cess.",
        ],
      },
      {
        heading: "Who deducts the 1% TDS in a P2P or OTC trade?",
        paragraphs: [
          "TDS is deducted by the person who pays the consideration for the VDA, at 1% of the amount paid to a resident. CBDT Circular 13 of 2022 confirms that in a direct buyer-to-seller trade with no exchange in between, the buyer deducts.",
          "So when you buy USDT and pay rupees, you are the deductor. When you sell USDT, the buyer deducts 1% from what they pay you and deposits it against your PAN.",
          "No TDS is needed if the total paid during the tax year stays within ₹50,000, where the payer is an individual or HUF with no business or professional income, or with business turnover up to ₹1 crore or professional receipts up to ₹50 lakh in the previous year. For every other payer, the limit is ₹10,000.",
          "If the payment is wholly or partly in kind, such as a swap for another VDA, the payer must make sure the tax has been paid before releasing the consideration.",
        ],
      },
      {
        heading: "Where does the TDS show up?",
        paragraphs: [
          "TDS deducted against your PAN appears in Part B of your Annual Information Statement (AIS) on the e-filing portal. Form 26AS on the TRACES portal also shows TDS and TCS data.",
          "The department's return validation rules flag cases where VDA TDS appears but the matching VDA income is missing or under-reported in the return. Check your AIS before filing.",
        ],
      },
      {
        heading: "How do you report USDT in your income tax return?",
        paragraphs: [
          "Use ITR-2 or ITR-3, which have a separate Schedule VDA. You report each transfer separately with the date of acquisition, date of transfer, cost of acquisition and sale consideration, and the income flows into the capital gains schedule at the 30% rate.",
        ],
      },
      {
        heading: "What changed by November 2026?",
        paragraphs: [
          "The 2025 Act added Section 509, which requires prescribed reporting entities to file statements on crypto-asset transactions. It continues Section 285BAA, inserted into the 1961 Act by the Finance Act, 2025 with effect from 1 April 2026.",
          "Budget 2026-27 added a penalty of ₹200 per day for not filing these statements and ₹50,000 for inaccurate information, from 1 April 2026. The 30% rate and 1% TDS were not changed.",
          `${SITE_NAME} keeps transaction hashes, timestamps and receipts for every trade, which gives you the dates and amounts Schedule VDA asks for.`,
          "This guide is general information, not tax advice. Confirm your own position with a chartered accountant.",
        ],
      },
    ],
    sources: [
      {
        label: "Income-tax Act, 2025 (Gazette text): Sections 2(111), 194, 393 and 509",
        url: "https://a2ztaxcorp.net/wp-content/uploads/2025/08/THE-INCOME-TAX-ACT-2025.pdf",
      },
      {
        label: "All India Radio News: Income-tax Act, 2025 effective from 1 April 2026",
        url: "https://www.newsonair.gov.in/income-tax-act-2025-gets-presidents-assent-will-be-effective-from-1st-april-2026",
      },
      {
        label: "CBDT Circular No. 13 of 2022 (guidelines on Section 194S)",
        url: "https://incometaxindia.gov.in/communications/circular/circular-13-2022.pdf",
      },
      {
        label: "Income Tax Department e-filing: ITR-2 FAQ (Section 115BBH, Schedule VDA)",
        url: "https://www.incometax.gov.in/iec/foportal/help/FileITR-2Online-FAQ",
      },
      {
        label: "Income Tax Department e-filing: ITR-2 validation rules, AY 2026-27",
        url: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-05/CBDT__e-Filing_ITR%202_Validation%20Rules_AY%202026-27_V1.0.pdf",
      },
      {
        label: "Income Tax Department e-filing: FAQs on AIS",
        url: "https://www.incometax.gov.in/iec/foportal/ais-faq",
      },
      {
        label: "Finance Bill 2026: Memorandum explaining provisions (crypto-asset penalty)",
        url: "https://www.indiabudget.gov.in/doc/memo.pdf",
      },
      {
        label: "Finance Bill 2026 (Health and Education Cess at 4%)",
        url: "https://www.indiabudget.gov.in/doc/Finance_Bill.pdf",
      },
    ],
  },
  {
    slug: "how-cdm-usdt-settlement-works",
    title: "How CDM Settlement Works When You Buy USDT",
    description:
      "Step-by-step: depositing cash at a bank machine, what proof to send, choosing TRC20 or BEP20 and checking your TXID.",
    updated: "2026-11-13",
    answer:
      "In a CDM settlement you deposit cash at a bank Cash Deposit Machine into the account the seller designates, then send the deposit receipt and your TRC20 or BEP20 wallet address. Once the seller matches the deposit to your order, the USDT is sent on-chain and you get a transaction ID (TXID). You can confirm that TXID yourself on Tronscan or BscScan.",
    sections: [
      {
        heading: "What is a Cash Deposit Machine?",
        paragraphs: [
          "A Cash Deposit Machine (CDM), which SBI calls an Automated Deposit cum Withdrawal Machine (ADWM), is an ATM-like machine that credits cash straight into a bank account. It works with a debit card or, at many machines, without one by entering the account number.",
          "The machine gives you a transaction receipt. That receipt is your proof of deposit, so keep it until the trade is complete.",
        ],
      },
      {
        heading: "How does a CDM USDT purchase work, step by step?",
        paragraphs: [
          "1. Request a quote. Share the amount, the route (CDM) and your city. You get a live price and the account details to deposit into.",
          "2. Complete identity checks. Verification happens before the trade is executed.",
          "3. Deposit the cash at a CDM into the designated account, for the exact amount quoted.",
          "4. Send proof. Share a clear photo of the receipt and your wallet address, and state the network: TRC20 or BEP20.",
          "5. Verification. The seller confirms the deposit has reached their account and matches it to your order and identity.",
          "6. Release. USDT is sent to your wallet and you receive the TXID.",
        ],
      },
      {
        heading: "What limits apply at the machine?",
        paragraphs: [
          "Limits are set by each bank. At SBI machines, a cardless deposit is capped at ₹49,900 per transaction and a debit card deposit at ₹2 lakh if the account is linked to a PAN. Up to 200 notes are accepted per transaction.",
          "SBI charges ₹22 plus GST for cardless deposits and for card deposits into someone else's account. Other banks set their own limits and charges, so check before you go.",
        ],
      },
      {
        heading: "TRC20 or BEP20: which network should you choose?",
        paragraphs: [
          "TRC20 is USDT on the Tron network. Tron addresses are 34 characters long and start with T. Tether lists the TRC20 USDT contract as TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t.",
          "BEP20 is USDT on BNB Smart Chain, which is compatible with Ethereum tooling. Its addresses start with 0x, like Ethereum addresses.",
          "Choose the network your wallet or exchange deposit page shows for USDT, and copy the address from that page. A T address and a 0x address belong to different networks, so the network you name must match the address you send.",
        ],
      },
      {
        heading: "How do you check your TXID on Tronscan or BscScan?",
        paragraphs: [
          "Paste the TXID into the search bar on tronscan.org for TRC20 or bscscan.com for BEP20. Open the transaction page.",
          "Check four things: the status shows the transaction succeeded, the token is USDT, the amount is right, and the receiving address is yours. On Tronscan, the token contract should match the Tether contract above.",
          "If the explorer shows success but your exchange has not credited you, give the exchange the TXID. Deposits often wait for a number of confirmations set by the exchange.",
        ],
      },
      {
        heading: "What does the desk need from you?",
        paragraphs: [
          `${SITE_NAME} takes orders from 100 USDT, settles over TRC20 or BEP20, and requires identity matching under PMLA safeguards before any trade. Send the deposit receipt and your wallet address after depositing.`,
          `Standard CDM settlements are released within 15 to 30 minutes of deposit confirmation, with the full TXID record. The desk is open ${HOURS}.`,
        ],
      },
    ],
    sources: [
      {
        label: "State Bank of India: Cash Deposit Machines (limits, charges, receipts)",
        url: "https://sbi.bank.in/web/personal-banking/information-services/kyc-guidelines/cash-deposit-machines",
      },
      {
        label: "Tether: Supported protocols (TRC20 USDT contract)",
        url: "https://tether.to/en/supported-protocols/",
      },
      {
        label: "TRON Developer Hub: Account and address format",
        url: "https://developers.tron.network/docs/account",
      },
      {
        label: "BNB Chain Docs: BNB Smart Chain introduction (EVM compatibility)",
        url: "https://docs.bnbchain.org/bnb-smart-chain/introduction/",
      },
      { label: "Tronscan: TRON blockchain explorer", url: "https://tronscan.org" },
      { label: "BscScan: BNB Smart Chain explorer", url: "https://bscscan.com" },
    ],
  },
  {
    slug: "p2p-usdt-bank-account-freeze",
    title: "Bank Account Freeze After P2P USDT Trades",
    description:
      "How a cyber fraud complaint traces money into a seller's account, what to do once frozen, and how to lower the risk.",
    updated: "2026-11-13",
    answer:
      "Bank accounts get frozen after P2P USDT trades when the rupees received are traced to a cyber fraud complaint. A victim reports on the National Cybercrime Reporting Portal or the 1930 helpline, the money is followed through the banking network, and banks hold funds in the accounts it reached. Trading only with verified counterparties who pay from their own account lowers the risk.",
    sections: [
      {
        heading: "How does a cybercrime complaint lead to a freeze?",
        paragraphs: [
          "Victims of online financial fraud can call the toll-free 1930 helpline or file on the National Cybercrime Reporting Portal (NCRP) at cybercrime.gov.in.",
          "These complaints feed the Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS), run by the Indian Cyber Crime Coordination Centre (I4C) since 2021. It is built to block fraudulent transactions through the banking network so the money can be recovered.",
          "The Ministry of Home Affairs says CFCFRMS had saved more than ₹11,158 crore across more than 32.80 lakh complaints by 30 June 2026. Saving the money means holding it in whichever accounts it reached.",
        ],
      },
      {
        heading: "Why do P2P sellers get caught up?",
        paragraphs: [
          "In a P2P trade, the buyer pays you from a bank account you know nothing about. If that money came from a fraud victim, your account is the next link in the chain once the complaint is traced.",
          "Fraudsters move stolen money through mule accounts, which are accounts opened or rented to pass funds along. I4C says it had shared 32.08 lakh first-layer mule accounts with banks through its Suspect Registry by 30 June 2026.",
          "The hold can be a lien on a specific amount or a debit freeze that blocks all withdrawals. Either can happen even if you delivered the USDT honestly.",
        ],
      },
      {
        heading: "What can you do if your account is frozen?",
        paragraphs: [
          "Ask your bank in writing for the reason, the complaint or acknowledgement number, the police station or cyber cell that requested the hold, and the amount held.",
          "Contact that cyber cell with your evidence: the trade chat, the buyer's details, the payment record and the TXID showing you delivered the USDT.",
          "The Ministry of Home Affairs issued a Standard Operating Procedure in January 2026 that covers grievance redressal and removal of lien markings. A Grievance Redressal Module for complaints about frozen accounts and lien marking has been working since April 2026. Ask the bank or cyber cell how to raise a grievance through it.",
          "The Home Minister has directed swift action on unnecessarily frozen accounts, and the Supreme Court has directed all High Courts to ensure the SOP is implemented. If the hold is not resolved, take advice from a lawyer.",
        ],
      },
      {
        heading: "How can you lower the risk before you trade?",
        paragraphs: [
          "Check the counterparty's identity, and accept payment only from a bank account in their own name. Refuse payments from third parties.",
          "Keep every record: chats, payment screenshots, deposit receipts and TXIDs. They are what a cyber cell will ask for.",
        ],
      },
      {
        heading: "How is verified OTC settlement different?",
        paragraphs: [
          `${SITE_NAME} verifies every counterparty under PMLA safeguards before execution and does not process unverified or third-party funds. CDM deposits are source-matched before USDT is released.`,
          "Every trade is logged with transaction hashes, timestamps and receipts. Verification lowers the chance of tainted money entering a trade and leaves a clear record if questions are ever raised.",
        ],
      },
    ],
    sources: [
      {
        label: "PIB (Ministry of Home Affairs), 28 July 2026: CFCFRMS 2.0 platform",
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2290377",
      },
      {
        label: "PIB (Ministry of Home Affairs), 21 July 2026: National cyber crime data",
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2287039",
      },
      {
        label: "PIB (Ministry of Home Affairs), 17 June 2026: Review of 1930 helpline, SOP and restoration modules",
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2274249",
      },
      { label: "National Cybercrime Reporting Portal", url: "https://cybercrime.gov.in" },
    ],
  },
];
