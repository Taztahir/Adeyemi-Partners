export interface Insight {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  description: string;
  readTime: string;
  featured?: boolean;
  author?: {
    name: string;
    role: string;
    image: string;
    bio: string;
  };
  content?: {
    lead: string;
    sections: {
      heading?: string;
      paragraphs: string[];
      list?: string[];
    }[];
    pullQuote?: string;
  };
}

export const insights: Insight[] = [
  {
    id: "fintech-regulatory-landscape-2024",
    title: "Navigating the New Regulatory Landscape for FinTech in 2024",
    slug: "fintech-regulatory-landscape-2024",
    date: "May 14, 2024",
    category: "Featured Insight",
    description: "A comprehensive analysis of recent legislative shifts impacting cross-border financial services and the emerging compliance requirements for digital asset providers in the EMEA region.",
    readTime: "7 min read",
    featured: true,
    author: {
      name: "Oluwaseun Adeyemi",
      role: "Managing Partner",
      image: "/images/attorneys/olumide-adeyemi.png",
      bio: "Oluwaseun specializes in complex international litigation and corporate advisory. With over 20 years of experience, he guides clients through regulatory obstacles."
    },
    content: {
      lead: "As global markets undergo a period of intense structural shifts, the regulatory landscape for cross-border transactions has reached a critical inflection point. Legal counsel must now navigate a dual reality of stringent compliance and accelerated digital integration.",
      sections: [
        {
          heading: "The Shifting Paradigm of Compliance",
          paragraphs: [
            "The rapid growth of decentralized finance and cross-border digital wallets has forced regulators in the EMEA region to re-evaluate their traditional oversight models. Moving forward, compliance is no longer a periodic check, but a continuous operational integration.",
            "Recent directives from the European Banking Authority and regional central banks indicate a unified front on capital reserve thresholds and anti-money laundering controls. FinTech players must adapt to these strictures or face severe license reviews."
          ],
          list: [
            "01. The harmonization of regulatory standards across emerging markets.",
            "02. Compliance with environmental, social, and governance (ESG) directives.",
            "03. The integration of AI-driven legal analytics in due diligence processes."
          ]
        },
        {
          heading: "Strategic Implications for Corporate Entities",
          paragraphs: [
            "For corporate clients, these regulatory adjustments demand a comprehensive overhaul of existing compliance pipelines. Legal and operations teams must collaborate closer than ever to minimize transaction friction while remaining within safe regulatory boundaries."
          ]
        }
      ],
      pullQuote: "In the current climate, legal stability is the foundation of institutional growth. Precision in interpretation is not just a service—it is a necessity."
    }
  },
  {
    id: "environmental-compliance-nigerian-industrial",
    title: "Environmental Compliance: New Standards for Nigerian Industrial Sectors",
    slug: "environmental-compliance-nigerian-industrial",
    date: "April 28, 2024",
    category: "Regulatory Alert",
    description: "Outlining the implications of the latest environmental directives on manufacturing and mining operators across West Africa.",
    readTime: "5 min read",
    author: {
      name: "Clara Obasi",
      role: "Head of Litigation",
      image: "/images/attorneys/clara-obasi.png",
      bio: "Clara is a veteran litigator with a flawless track record in federal trials and commercial arbitrations."
    }
  },
  {
    id: "protecting-digital-innovations-generative-ai",
    title: "Protecting Digital Innovations in the Era of Generative AI",
    slug: "protecting-digital-innovations-generative-ai",
    date: "April 15, 2024",
    category: "Intellectual Property",
    description: "A strategic guide for tech startups on securing patent rights and copyright protections for AI-integrated software solutions.",
    readTime: "6 min read",
    author: {
      name: "David Chen",
      role: "Corporate Advisory Partner",
      image: "/images/attorneys/david-chen.png",
      bio: "David advises multinationals on international mergers, regulatory compliance, and intellectual property."
    }
  },
  {
    id: "structured-finance-trends-private-debt",
    title: "Trends in Structured Finance: The Rise of Private Debt in Africa",
    slug: "structured-finance-trends-private-debt",
    date: "March 22, 2024",
    category: "Banking & Finance",
    description: "How rising interest rates are driving institutional investors toward private credit markets and what it means for corporate borrowers.",
    readTime: "5 min read",
    author: {
      name: "Oluwaseun Adeyemi",
      role: "Managing Partner",
      image: "/images/attorneys/olumide-adeyemi.png",
      bio: "Oluwaseun specializes in complex international litigation and corporate advisory."
    }
  },
  {
    id: "arbitration-vs-litigation-disputes",
    title: "Arbitration vs. Litigation: Choosing the Right Forum for Disputes",
    slug: "arbitration-vs-litigation-disputes",
    date: "March 08, 2024",
    category: "Litigation",
    description: "Comparative analysis of cost-effectiveness and confidentiality in international commercial dispute resolutions.",
    readTime: "4 min read",
    author: {
      name: "Clara Obasi",
      role: "Head of Litigation",
      image: "/images/attorneys/clara-obasi.png",
      bio: "Clara is a veteran litigator with a flawless track record in federal trials and commercial arbitrations."
    }
  },
  {
    id: "mixed-use-development-frameworks",
    title: "Legal Frameworks for Mixed-Use Developments in Emerging Cities",
    slug: "mixed-use-development-frameworks",
    date: "February 18, 2024",
    category: "Real Estate",
    description: "A look at zoning laws and shared-ownership models that are shaping the next generation of urban commercial hubs.",
    readTime: "6 min read",
    author: {
      name: "David Chen",
      role: "Corporate Advisory Partner",
      image: "/images/attorneys/david-chen.png",
      bio: "David advises multinationals on international mergers, regulatory compliance, and intellectual property."
    }
  },
  {
    id: "global-minimum-tax-multinationals-sub-saharan",
    title: "Global Minimum Tax: Impact on Multinationals in Sub-Saharan Africa",
    slug: "global-minimum-tax-multinationals-sub-saharan",
    date: "January 30, 2024",
    category: "Taxation",
    description: "Evaluating the Pillar Two global minimum tax implementation and its specific challenges for resource-rich nations.",
    readTime: "8 min read",
    author: {
      name: "Oluwaseun Adeyemi",
      role: "Managing Partner",
      image: "/images/attorneys/olumide-adeyemi.png",
      bio: "Oluwaseun specializes in complex international litigation and corporate advisory."
    }
  },
];
