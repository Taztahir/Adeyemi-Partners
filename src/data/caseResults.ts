export interface CaseResult {
  id: string;
  title: string;
  outcome: string;
  description: string;
  category: string;
}

export const caseResults: CaseResult[] = [
  {
    id: "tech-giant-ip-dispute",
    title: "$120M Settlement",
    outcome: "Tech Giant IP Dispute",
    description: "Successfully resolved patent infringement claims with a multi-year licensing agreement, protecting core proprietary technology.",
    category: "Intellectual Property"
  },
  {
    id: "sovereign-client-arbitration",
    title: "Defense Verdict",
    outcome: "Sovereign Client Arbitration",
    description: "Obtained complete dismissal of breach of contract claims in an international tribunal forum, shielding sovereign assets.",
    category: "International Disputes"
  }
];
