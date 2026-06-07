export interface Experience {
  role: string;
  organization: string;
  url: string;
  period: string;
  type: "academia" | "company" | "other";
  initials: string;
  description: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: "Cybersecurity & Artificial Intelligence Intern",
    organization: "Orange Innovation",
    url: "https://www.orange.com",
    period: "Feb 2026 – Aug 2026",
    type: "company",
    initials: "OR",
    description:
      "Developed AI-driven Cyber Threat Intelligence solutions for WAF alert filtering and threat prioritisation. Built FastAPI services processing over 10,000 requests per day and applied VAE + HDBSCAN techniques with domain adaptation using honeypot data.",
    tags: [
      "Cyber Threat Intelligence",
      "AI Security",
      "FastAPI",
      "VAE",
      "HDBSCAN",
      "Python",
      "WAF"
    ]
  },

  {
    role: "Artificial Intelligence for Healthcare Intern",
    organization: "Centre François Baclesse",
    url: "https://www.baclesse.fr",
    period: "Apr 2025 – Aug 2025",
    type: "company",
    initials: "CFB",
    description:
      "Developed unsupervised learning pipelines to stratify and prioritise oncology patients using multidimensional clinical data. Evaluated PCA, UMAP, K-Means and DBSCAN approaches for healthcare decision support.",
    tags: [
      "Machine Learning",
      "Healthcare AI",
      "PCA",
      "UMAP",
      "K-Means",
      "DBSCAN",
      "Python"
    ]
  },

  {
    role: "First Lieutenant – Signals Branch",
    organization: "Brazilian Army",
    url: "https://www.eb.mil.br",
    period: "Feb 2018 – Jun 2024",
    type: "other",
    initials: "BA",
    description:
      "Managed monitoring and network infrastructure environments with more than 10,000 assets using Zabbix, Grafana and Python. Led a 10-person technical team and worked on tactical and strategic military communications systems.",
    tags: [
      "Network Security",
      "Zabbix",
      "Grafana",
      "Python",
      "ITIL",
      "COBIT",
      "Leadership"
    ]
  },
];