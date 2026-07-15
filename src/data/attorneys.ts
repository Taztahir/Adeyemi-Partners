export interface Attorney {
  id: string;
  name: string;
  slug: string;
  role: string;
  image: string;
  bio: string;
  education: string[];
  admissions: string[];
}

export const attorneys: Attorney[] = [
  {
    id: "olumide-adeyemi",
    name: "Olumide Adeyemi",
    slug: "olumide-adeyemi",
    role: "Managing Partner",
    image: "/images/attorneys/olumide-adeyemi.png",
    bio: "Olumide has over two decades of experience representing sovereign states and Fortune 100 corporate boards in high-stakes legal disputes and complex global restructuring affairs.",
    education: ["Harvard Law School, J.D.", "University of Ibadan, LL.B."],
    admissions: ["Nigeria Bar Association", "New York State Bar"]
  },
  {
    id: "clara-obasi",
    name: "Clara Obasi",
    slug: "clara-obasi",
    role: "Head of Litigation",
    image: "/images/attorneys/clara-obasi.png",
    bio: "Clara is a veteran litigator with a flawless track record in federal trials and commercial arbitrations. She specializes in corporate defense and regulatory disputes.",
    education: ["Yale Law School, J.D.", "Obafemi Awolowo University, LL.B."],
    admissions: ["Nigeria Bar Association", "Chartered Institute of Arbitrators (CIArb)"]
  },
  {
    id: "david-chen",
    name: "David Chen",
    slug: "david-chen",
    role: "Corporate Advisory",
    image: "/images/attorneys/david-chen.png",
    bio: "David advises multinationals on international mergers, regulatory compliance, intellectual property protection, and cross-border transactions.",
    education: ["Columbia Law School, J.D.", "London School of Economics, B.Sc."],
    admissions: ["New York State Bar", "California State Bar"]
  }
];
