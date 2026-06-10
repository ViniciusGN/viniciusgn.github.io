export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming",
    skills: ["Python", "SQL", "Bash", "C/C++", "TypeScript", "Java"],
  },
  {
    label: "AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain", "RAG", "Reinforcement Learning"],
  },
  {
    label: "Cybersecurity",
    skills: ["Threat Intelligence", "SIEM", "MITRE ATT&CK", "Splunk", "Wireshark", "Burp Suite", "Metasploit", "Nmap"],
  },
  {
    label: "Wireless & RF",
    skills: ["CSI Fingerprinting", "RF Fingerprinting", "802.11", "GNSS", "Signal Processing", "SDR", "GNU Radio"],
  },
  {
    label: "Data & MLOps",
    skills: ["Pandas", "MLflow", "Weights & Biases", "Spark", "Databricks", "Snowflake"],
  },
  {
    label: "Cloud & Infrastructure",
    skills: ["AWS", "Docker", "Kubernetes", "Grafana", "Zabbix", "Git", "CI/CD"],
  },
];