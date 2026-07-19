export interface EducationEntry {
  degree: string;
  school: string;
}

export interface EngagementEntry {
  title: string;
  description: string;
}

export interface Attorney {
  id: string;
  name: string;
  slug: string;
  role: string;
  specialization: string;
  image: string;
  bio: string[];
  quote: string;
  experience: string;
  location: string;
  educationDetails: EducationEntry[];
  admissions: string[];
  engagements: EngagementEntry[];
}

export const attorneys: Attorney[] = [
  {
    id: "samuel-adeyemi",
    name: "Samuel Adeyemi",
    slug: "samuel-adeyemi",
    role: "Senior Partner",
    specialization: "Corporate Litigation",
    image: "/images/attorneys/oluwatoyin.png",
    quote: "Integrity is the anchor of advocacy. We do not just represent clients; we safeguard their legacies through meticulous precision and unwavering resolve.",
    experience: "28+ Years",
    location: "Lagos / London",
    bio: [
      "Samuel Adeyemi, the founding Senior Partner of Adeyemi & Partners, has nearly three decades of experience at the intersection of international trade law and complex corporate restructuring. Mr. Adeyemi has established himself as a preeminent figure in the legal landscape of West Africa.",
      "His approach combines clinical precision with a deep understanding of multi-jurisdictional frameworks. He has successfully advised Fortune 100 companies on entry strategies into emerging markets, navigating the delicate balance between local compliance and international standards.",
      "Beyond the courtroom, Samuel serves as a mentor to the next generation of legal minds and frequently publishes treatises on the evolution of intellectual property rights in the digital age."
    ],
    educationDetails: [
      { degree: "Juris Doctor (J.D.)", school: "Harvard Law School, Cum Laude" },
      { degree: "LL.M. in International Law", school: "London School of Economics" },
      { degree: "Bachelor of Laws (LL.B.)", school: "University of Ibadan, First Class Honors" }
    ],
    admissions: [
      "Nigerian Bar Association (2000)",
      "Law Society of England and Wales (Solicitor)",
      "New York State Bar Association"
    ],
    engagements: [
      { title: "The Petro-Energy Merger", description: "Lead counsel for a $1.2B cross-border merger, navigating complex regulatory hurdles across three continents." },
      { title: "Telecom IP Dispute", description: "Successfully defended a major telecommunications firm in a landmark patent infringement case valued at $450M." },
      { title: "Central Bank Reform", description: "Appointed as the primary legal advisor for the restructuring of federal banking compliance frameworks." }
    ]
  },
  {
    id: "victoria-sinclair",
    name: "Victoria Sinclair",
    slug: "victoria-sinclair",
    role: "Senior Associate",
    specialization: "Complex Commercial Litigation",
    image: "/images/attorneys/victoria.png",
    quote: "Advocacy requires both intellectual rigor and strategic adaptability. We represent our clients' interests with unyielding discipline.",
    experience: "12+ Years",
    location: "London / New York",
    bio: [
      "Victoria Sinclair specializes in international commercial dispute resolution, regulatory investigations, and corporate crisis management. She represents multi-national organizations before UK courts and international tribunals.",
      "With a background spanning two major financial hubs, Victoria provides clients with a sophisticated understanding of regulatory intersectionality and risk mitigation."
    ],
    educationDetails: [
      { degree: "B.A. in Jurisprudence", school: "Oxford University" },
      { degree: "LL.B. in Common Law", school: "University of Lagos" }
    ],
    admissions: [
      "Nigerian Bar Association (2014)",
      "Solicitor of the Senior Courts of England and Wales"
    ],
    engagements: [
      { title: "Sovereign Asset Claim", description: "Successfully defended a West African state in an international asset seizure attempt valued at $800M." },
      { title: "FinTech Compliance Review", description: "Counseled a major payment provider through a regulatory audit across six European jurisdictions." }
    ]
  },
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    slug: "marcus-thorne",
    role: "Partner",
    specialization: "Banking & International Finance",
    image: "/images/attorneys/marcus.png",
    quote: "Precision in structure is the foundation of transaction security. We build frameworks designed to endure market fluctuations.",
    experience: "18+ Years",
    location: "London / Lagos",
    bio: [
      "Marcus advises multi-national banking institutions and private equity funds on structured finance, debt capital markets, and syndicated lending. He has successfully negotiated transactional frameworks for sovereign debts and international development projects."
    ],
    educationDetails: [
      { degree: "Juris Doctor (J.D.)", school: "Yale Law School" },
      { degree: "B.Sc. in Economics", school: "London School of Economics" }
    ],
    admissions: [
      "New York State Bar (2008)",
      "Nigeria Bar Association"
    ],
    engagements: [
      { title: "Infrastructure Syndicate", description: "Structured the syndicated debt facility for a $450M regional power plant project." },
      { title: "Sovereign Bond Issuance", description: "Advised a national treasury on its $1.5B Eurobond offering and structural compliance." }
    ]
  },
  {
    id: "aisha-bello",
    name: "Aisha Bello",
    slug: "aisha-bello",
    role: "Associate",
    specialization: "Intellectual Property & Digital Rights",
    image: "/images/attorneys/aishat.png",
    quote: "In the digital economy, intangible assets are the most critical values. We protect our clients' innovations with forward-looking strategy.",
    experience: "6+ Years",
    location: "Lagos",
    bio: [
      "Aisha counsels emerging technology firms, media companies, and creative entities on intellectual property protection, licensing agreements, and data privacy frameworks.",
      "She has developed a reputation for providing structured, pragmatic advisory on licensing disputes and global trademark registration."
    ],
    educationDetails: [
      { degree: "LL.M. in Intellectual Property", school: "Columbia Law School" },
      { degree: "Bachelor of Laws (LL.B.)", school: "Obafemi Awolowo University" }
    ],
    admissions: [
      "Nigeria Bar Association (2020)"
    ],
    engagements: [
      { title: "AI Product Licensing", description: "Drafted global intellectual property and SaaS licensing terms for a leading AI startup." },
      { title: "Trademark Protection Action", description: "Successfully resolved a multi-year brand infringement claim for a regional retail conglomerate." }
    ]
  },
  {
    id: "julius-vance",
    name: "Julius Vance",
    slug: "julius-vance",
    role: "Partner",
    specialization: "Real Estate & Construction Law",
    image: "/images/attorneys/julian.png",
    quote: "Commercial properties require both physical structural integrity and clean legal foundation. We protect real property investments.",
    experience: "15+ Years",
    location: "Lagos / London",
    bio: [
      "Julius represents institutional investors, real estate developers, and sovereign wealth funds in commercial property acquisitions, development financing, and land tenure disputes."
    ],
    educationDetails: [
      { degree: "LL.M. in Commercial Law", school: "University of Cambridge" },
      { degree: "Bachelor of Laws (LL.B.)", school: "University of Ibadan" }
    ],
    admissions: [
      "Nigeria Bar Association (2011)"
    ],
    engagements: [
      { title: "Metropolitan Joint Venture", description: "Structured the JV and land acquisition framework for a $200M mixed-use urban commercial center." },
      { title: "Tenure Dispute Defense", description: "Successfully defended a development fund against complex communal land tenure claims in court." }
    ]
  },
  {
    id: "elizabeth-hart",
    name: "Elizabeth Hart",
    slug: "elizabeth-hart",
    role: "Senior Counsel",
    specialization: "Tax Advisory & Private Wealth",
    image: "/images/attorneys/elizabeth.png",
    quote: "Wealth preservation is the result of strategic compliance. We provide counsel that protects both current assets and future generations.",
    experience: "22+ Years",
    location: "Lagos / London",
    bio: [
      "Elizabeth provides bespoke tax structuring advice and wealth preservation counsel for family-owned conglomerates, private trusts, and high-net-worth individuals.",
      "With over two decades of advisory experience, she acts as a trusted advisor to families navigating generational transfer of wealth and cross-border assets."
    ],
    educationDetails: [
      { degree: "LL.M. in Taxation", school: "Georgetown University Law Center" },
      { degree: "Bachelor of Laws (LL.B.)", school: "University of Lagos" }
    ],
    admissions: [
      "Nigeria Bar Association (2004)",
      "New York State Bar Association"
    ],
    engagements: [
      { title: "Family Conglomerate Trust", description: "Designed the generational transition and private family trust structures for a tier-one manufacturing group." },
      { title: "Cross-Border Wealth Structuring", description: "Advised a private client on international tax implications of assets held across the UK, US, and Nigeria." }
    ]
  }
];
