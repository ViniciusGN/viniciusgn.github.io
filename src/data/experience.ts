export interface Experience {
  role: string;
  organization: string;
  url: string;
  period: string;
  type: "academia" | "company" | "other";
  initials: string;
  logo?: string;
  description: string | string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: "Cybersecurity & Artificial Intelligence Intern",
    organization: "Orange Innovation",
    url: "https://www.orange.com",
    period: "Feb 2026 - Aug 2026",
    type: "company",
    initials: "OR",
    logo: "/images/profile/experience/orange_logo.jpg",
    description: [
      "Developed a FastAPI-based system processing over 10,000 daily requests in the Cyber Threat Intelligence domain, enabling dynamic filtering of WAF alerts using AI models.",
      "Applied VAE + HDBSCAN with domain adaptation on honeypot-collected data to improve WAF alert prioritisation across Orange subsidiary environments.",
    ],
    tags: ["AI Security", "CTI", "FastAPI", "VAE", "HDBSCAN", "Domain Adaptation", "Python"],
  },
  {
    role: "Artificial Intelligence for Healthcare Intern",
    organization: "Centre François Baclesse",
    url: "https://www.baclesse.fr",
    period: "Apr 2025 - Aug 2025",
    type: "company",
    initials: "CFB",
    logo: "/images/profile/experience/cfb_logo.png",
    description: [
      "Developed unsupervised learning pipelines for stratification and prioritisation of over 600 oncology patients using PCA, UMAP, K-Means and DBSCAN on multidimensional clinical data.",
      "Supported rapid patient grouping during healthcare crisis scenarios.",
    ],
    tags: ["Healthcare AI", "PCA", "UMAP", "K-Means", "DBSCAN", "Python", "Data Analysis"],
  },
  {
    role: "First Lieutenant - Signals Branch",
    organization: "Brazilian Army",
    url: "https://www.eb.mil.br",
    period: "Feb 2018 - Jun 2024",
    type: "other",
    initials: "BA",
    logo: "/images/profile/experience/Brazilian_Army.svg",
    description: [
      "Managed monitoring and network infrastructure with over 10,000 assets using Zabbix, Grafana and Python, aligned with ITIL and COBIT practices.",
      "Led a 10-person team responsible for network monitoring across all 12 Brazilian Army regions, operational support and IT procurement exceeding R$ 1,000,000.",
      "Commanded a Signals Platoon in the Amazon Forest (2019-2021), supporting tactical communications in remote environments.",
    ],
    tags: ["Network Security", "Zabbix", "Grafana", "Python", "Leadership", "ITIL", "Adaptation"],
  },
];