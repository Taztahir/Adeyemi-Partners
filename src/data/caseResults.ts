export interface CaseResult {
  id: string;
  title: string;
  outcome: string; // maps to bottom metadata (e.g., "YEAR: 2023", "CONFIDENTIAL SETTLEMENT")
  description: string;
  category: string; // e.g., "Corporate Law", "Litigation", "Real Estate", "Taxation", "IP"
}

export const caseResults: CaseResult[] = [
  {
    id: "acquisition-secured-450m",
    title: "$450M Acquisition Secured",
    outcome: "YEAR: 2023",
    description: "Represented a major tech conglomerate in the successful acquisition of a specialized AI firm, navigating multi-jurisdictional regulatory hurdles and ensuring comprehensive asset protection.",
    category: "Corporate Law"
  },
  {
    id: "shareholder-dispute-resolved",
    title: "Complex Shareholder Dispute: Resolved",
    outcome: "CONFIDENTIAL SETTLEMENT",
    description: "Successfully defended a minority shareholder's interests in a high-stakes litigation involving allegations of breach of fiduciary duty and corporate mismanagement.",
    category: "Litigation"
  },
  {
    id: "portfolio-restructuring-1-2b",
    title: "$1.2B Commercial Portfolio Restructuring",
    outcome: "YEAR: 2024",
    description: "Facilitated the debt restructuring and portfolio optimization for a Tier-1 developer, involving thirty-two commercial properties across five African capital cities.",
    category: "Real Estate"
  },
  {
    id: "tax-liability-reduction-83m",
    title: "Tax Liability Reduction of $83M",
    outcome: "STRATEGIC ADVISORY",
    description: "Provided strategic advisory on cross-border tax structures for a multinational energy firm, resulting in substantial lawful reductions in recurring annual liabilities.",
    category: "Taxation"
  },
  {
    id: "patent-defense-success",
    title: "Global Patent Defense Success",
    outcome: "YEAR: 2022",
    description: "Vindicated a leading pharmaceutical brand in a high-profile patent infringement suit, securing a permanent injunction against a competitor's generic product launch.",
    category: "IP"
  },
  {
    id: "ipo-advisory-2-1b",
    title: "IPO Advisory: $2.1B Offering",
    outcome: "PUBLIC MARKETS",
    description: "Lead legal counsel for the initial public offering of a regional fintech unicorn, overseeing compliance with all security exchange commission mandates.",
    category: "Corporate Law"
  }
];
