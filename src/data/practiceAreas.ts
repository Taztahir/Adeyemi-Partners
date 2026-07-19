export interface PracticeService {
  icon: string;
  title: string;
  description: string;
}

export interface PracticeEngagement {
  category: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  icon?: string;
  services?: PracticeService[];
  engagements?: PracticeEngagement[];
  counselIds?: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'corporate-law',
    title: 'Corporate Law',
    slug: 'corporate-law',
    description: 'Strategic counsel for mergers, acquisitions, corporate governance, and complex commercial transactions. We guide businesses through intricate regulatory landscapes to secure their long-term objectives.',
    longDescription: 'At Adeyemi & Partners, our corporate law practice stands at the intersection of ambition, capital, and accountability. Our approach combines analytical depth with strategic foresight — enabling us to counsel global enterprises, family-owned conglomerates, and leading multinationals on their most consequential decisions.',
    icon: 'Building',
    services: [
      {
        icon: 'Briefcase',
        title: 'Mergers & Acquisitions',
        description: 'Full-cycle M&A advisory from initial structuring through regulatory clearance and post-merger integration for domestic and cross-border transactions.'
      },
      {
        icon: 'LayoutGrid',
        title: 'Corporate Governance',
        description: 'Board advisory, director duties, shareholder rights, and international governance standards to ensure sound institutional leadership.'
      },
      {
        icon: 'ShieldCheck',
        title: 'Regulatory Compliance',
        description: 'Guidance on sectoral licensing, compliance frameworks, and interaction with international regulatory bodies across multiple jurisdictions.'
      }
    ],
    engagements: [
      {
        category: 'Cross-Border Transaction',
        title: '$600M Cross-Border Acquisition',
        description: 'Represented the acquiring party in a multi-jurisdictional acquisition spanning four continents, coordinating counsel across six regulatory frameworks.',
        highlighted: false
      },
      {
        category: 'Compliance',
        title: 'Multi-Year Compliance Audit',
        description: 'Conducted a firm-wide compliance review for a listed financial institution, identifying and remediating seventeen material regulatory exposures.',
        highlighted: true
      }
    ],
    counselIds: ['samuel-adeyemi', 'marcus-thorne']
  },
  {
    id: 'litigation',
    title: 'Litigation',
    slug: 'litigation',
    description: 'Fierce advocacy in civil and commercial disputes. Our litigators are renowned for their meticulous preparation and formidable presence in negotiations, arbitrations, and trials.',
    longDescription: 'Our litigation practice is built around one principle: that the most complex disputes require the most disciplined counsel. We represent clients before federal and state courts, international arbitral tribunals, and regulatory bodies — with a track record that speaks for itself.',
    icon: 'Scale',
    services: [
      {
        icon: 'Scale',
        title: 'Commercial Litigation',
        description: 'Representation in high-value contract disputes, fraud claims, and fiduciary breach actions before courts of all levels.'
      },
      {
        icon: 'Globe',
        title: 'International Arbitration',
        description: 'Expert advocacy before ICC, ICSID, and LCIA panels in cross-border commercial and investment treaty disputes.'
      }
    ],
    engagements: [
      {
        category: 'Litigation Victory',
        title: 'Full Defense Verdict — $340M Claim',
        description: 'Obtained a complete defense verdict in a $340M breach of contract claim brought before the Lagos Commercial Court.',
        highlighted: false
      }
    ],
    counselIds: ['victoria-sinclair', 'samuel-adeyemi']
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    slug: 'real-estate',
    description: 'Comprehensive representation in commercial real estate acquisitions, development, leasing, and financing. We structure deals that mitigate risk and maximize asset value.',
    longDescription: 'Our real estate team delivers strategic counsel on complex commercial transactions, structural finance, and land tenure disputes. We service real estate developers, institutional investors, and sovereign clients on large-scale infrastructure and mixed-use developments.',
    icon: 'Building',
    services: [
      {
        icon: 'Building',
        title: 'Acquisitions & Disposals',
        description: 'Representing institutional buyers and sellers in high-value real property assets, portfolios, and commercial hubs.'
      },
      {
        icon: 'Briefcase',
        title: 'Real Estate Financing',
        description: 'Counsel on syndications, structural finance models, commercial mortgages, and equity investments.'
      }
    ],
    engagements: [
      {
        category: 'Development',
        title: 'Mixed-Use Regional Hub Structure',
        description: 'Structured the joint venture and land acquisition framework for a $150M mixed-use urban commercial center.',
        highlighted: true
      }
    ],
    counselIds: ['julius-vance']
  },
  {
    id: 'family-law',
    title: 'Family Law',
    slug: 'family-law',
    description: 'Discreet and empathetic counsel for high-net-worth divorces, complex asset division, and multi-jurisdictional family disputes. We prioritize resolution while fiercely protecting our clients\' interests.',
    longDescription: 'Adeyemi & Partners offers absolute discretion and refined legal advice on family matters. We counsel clients on wealth preservation, trust establishment, divorce settlements, and custodial negotiations.',
    icon: 'Users',
    services: [
      {
        icon: 'Shield',
        title: 'Asset Division & Preservation',
        description: 'Discreet separation of family holdings, trusts, business assets, and high-value equities.'
      },
      {
        icon: 'FileText',
        title: 'Trusts & Estate Planning',
        description: 'Designing private family trusts and robust wills to protect cross-border generational wealth.'
      }
    ],
    engagements: [
      {
        category: 'Resolution',
        title: 'Cross-Border Marital Settlement',
        description: 'Successfully settled a multi-jurisdictional marital dispute involving assets across the UK, US, and Nigeria without litigation.',
        highlighted: true
      }
    ],
    counselIds: ['samuel-adeyemi', 'elizabeth-hart']
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    slug: 'intellectual-property',
    description: 'Robust protection and enforcement of patents, trademarks, and copyrights. We safeguard the intangible assets that drive innovation and market dominance.',
    longDescription: 'Our IP practice secures and defends the ideas and tech structures driving modern growth. We operate across key registries, defending startups, multinationals, and creators from infringement and trade secret misappropriation.',
    icon: 'Lightbulb',
    services: [
      {
        icon: 'Shield',
        title: 'Patent Protection & Filing',
        description: 'Comprehensive research, drafting, registration, and defense of patent claims worldwide.'
      },
      {
        icon: 'Tag',
        title: 'Brand Registry Strategy',
        description: 'Clearing, registering, and managing global trademark portfolios for major brands.'
      }
    ],
    engagements: [
      {
        category: 'Enforcement',
        title: '$120M Patent Dispute Settlement',
        description: 'Negotiated a favorable settlement and cross-licensing framework in a complex software infringement action.',
        highlighted: false
      }
    ],
    counselIds: ['aisha-bello', 'victoria-sinclair']
  },
  {
    id: 'employment-law',
    title: 'Employment Law',
    slug: 'employment-law',
    description: 'Advising corporate entities on executive compensation, workplace policies, and defense against claims. We ensure compliance while maintaining operational equity.',
    longDescription: 'We provide corporate boards and management teams with counsel on labor standards, executive contracts, union relations, and discrimination defense. We safeguard institutional continuity through sound governance policies.',
    icon: 'Briefcase',
    services: [
      {
        icon: 'LayoutGrid',
        title: 'Executive Compensation Advisory',
        description: 'Structuring equity-incentive models, options, and separation terms for C-suite personnel.'
      },
      {
        icon: 'ShieldCheck',
        title: 'Labor Dispute Defense',
        description: 'Representing management teams in wrongful dismissal actions, contract arbitrations, and regulatory inquiries.'
      }
    ],
    engagements: [
      {
        category: 'Advisory',
        title: 'Workplace Restructuring Program',
        description: 'Counseled a pan-African bank through a comprehensive workforce restructuring program covering 2,500 employees.',
        highlighted: true
      }
    ],
    counselIds: ['julius-vance']
  }
];
