export interface Project {
  title: string;
  slug: string;
  year: string;
  color: string;
  description: string;
  fullDescription: string;
  images: string[];
  tags: string[];
  hasDemo: boolean;
  demoUrl: string;
  githubUrl: string;
}

export const CATEGORY_TAGS = ["AI", "Cybersecurity", "AI Security", "Others"] as const;
export type CategoryTag = (typeof CATEGORY_TAGS)[number];

export const projects: Project[] = [
  {
    title: "PLA Explorer",
    slug: "pla-explorer",
    year: "2026",
    color: "#2563EB",
    description:
      "Interactive research tool for exploring Physical-Layer Authentication using CSI fingerprinting and Siamese CNNs. Visualizes model performance, confusion matrices, and signal patterns.",
    fullDescription:
      "Physical-Layer Authentication (PLA) Explorer is an interactive research application for exploring results of a Siamese CNN trained on Wi-Fi CSI data for device authentication. Provides live simulations, confusion matrix visualizations, and comparative analysis of signal fingerprints across environments.",
    images: [],
    tags: ["CSI Fingerprint", "Siamese CNN", "PyTorch", "React", "Vite", "AI", "AI Security", "Cybersecurity"],
    hasDemo: true,
    demoUrl: "https://vmnascimento.com/pla-explorer",
    githubUrl: "https://github.com/ViniciusGN/pla-explorer",
  },
  {
    title: "Generative AI & Computer Vision — Bayeux Museum",
    slug: "greyc-bayeux",
    year: "2026",
    color: "#2563EB", // "#7C3AED"
    description:
      "Industrial project with GREYC laboratory and the Bayeux Museum. Interactive solutions using generative AI and computer vision to promote the cultural heritage of the Bayeux Tapestry.",
    fullDescription:
      "6-month industrial project in partnership with the Bayeux Museum and the GREYC research laboratory (CNRS/ENSICAEN). Developed interactive solutions using SAM, CLIP, and open-source models from the Hugging Face ecosystem to promote the cultural heritage of the Bayeux Tapestry through generative AI and computer vision.",
    images: [],
    tags: ["Generative AI", "Computer Vision", "SAM", "CLIP", "Hugging Face", "AI", "Others"],
    hasDemo: false,
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Social Engineering Attack Demonstrator",
    slug: "social-engineering-demo",
    year: "2025",
    color: "#DC2626", // "#DC2626" Cybersecurity  
    description:
      "Educational demonstrator of a social engineering attack using a malicious PDF, a Discord-integrated chatbot, LLM APIs, and Metasploit — aimed at security awareness.",
    fullDescription:
      "Academic project at ENSICAEN. Development of an educational demonstrator of a social engineering attack chain using a malicious PDF, a Discord-integrated chatbot, LLM APIs, and offensive tools such as Metasploit. Designed to raise awareness of security risks through controlled exploitation in a sandboxed environment.",
    images: [],
    tags: ["Social Engineering", "LLMs", "Metasploit", "Offensive Security", "Cybersecurity", "AI Security"],
    hasDemo: false,
    demoUrl: "",
    githubUrl: "",
  },
  // {
  //   title: "RF Fingerprinting for GNSS Spoofing Detection",
  //   slug: "gnss-spoofing",
  //   year: "2026",
  //   color: "#059669",
  //   description:
  //     "Machine learning pipeline for detecting GNSS spoofing attacks using radio-frequency fingerprinting on raw signal data.",
  //   fullDescription:
  //     "A machine learning pipeline that extracts RF fingerprints from raw GNSS signal captures and trains a classifier to distinguish authentic signals from spoofed ones. Evaluated on multiple spoofing scenarios including meaconing and signal injection.",
  //   images: [],
  //   tags: ["RF Fingerprinting", "GNSS", "Spoofing Detection", "Python", "scikit-learn", "Cybersecurity", "AI Security"],
  //   hasDemo: false,
  //   demoUrl: "",
  //   githubUrl: "https://github.com/ViniciusGN/gnss-spoofing",
  // },
  {
    title: "IoT & Embedded Security — Smart Water Meter",
    slug: "dyonaos-iot",
    year: "2023",
    color: "#0891B2",
    description:
      "R&D project for a Smart Water Meter with 5G connectivity and secure authentication using X.509 certificates.",
    fullDescription:
      "Research project at DyonaOS. Participation in an R&D initiative for the development of a Smart Water Meter technology with a focus on 5G connectivity and secure device authentication using X.509 certificates and PKI infrastructure.",
    images: [],
    tags: ["IoT", "Embedded Security", "X.509", "PKI", "5G", "Cybersecurity", "Others"],
    hasDemo: false,
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Corporate Network Simulation — GNS3",
    slug: "gns3-network",
    year: "2023",
    color: "#D97706", // Network Security
    description:
      "Full corporate network simulation in GNS3 integrating Snort, Suricata, Wazuh, Zabbix, Kali Linux, and an OSPF backbone with VLAN segmentation.",
    fullDescription:
      "Built a full corporate network simulation in GNS3 for the Network Security course at UnB. Integrated Snort, Suricata, Wazuh, Zabbix, and Kali Linux into an OSPF backbone with VLAN segmentation using ExOS L3 switches. Covered IDS/IPS deployment, SIEM integration, and attack simulation workflows.",
    images: [],
    tags: ["GNS3", "Snort", "Suricata", "Wazuh", "OSPF", "VLAN", "Cybersecurity", "Others"],
    hasDemo: false,
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Cryptography — University Labs & Coursework ",
    slug: "crypto-university-labs",
    year: "2024 – 2025",
    color: "#BE185D", // fixed for Cryptography projects
    description: "Cryptography coursework across two degrees — UnB and ENSICAEN — spanning RSA/AES implemented from scratch, elliptic curve cryptography and ECDSA, certificate parsing, side-channel attacks, and classical cryptographic theory.",
    fullDescription: "Cryptography coursework taken across two degrees, plus a dedicated Advanced Cryptography course, forming a broader cryptography track between UnB and ENSICAEN.", // fallback only — real content lives in the detail file
    images: [],
    tags: ["RSA", "AES", "ECC", "ECDSA", "Diffie-Hellman", "Side-Channel Attacks", "Python", "Cybersecurity"],
    hasDemo: false,
    demoUrl: "",
    githubUrl: "https://github.com/ViniciusGN/advanced-cryptography",
  },
  {
    title: "Operating Systems & Parallel Computing — University Labs & Coursework",
    slug: "os-university-labs",
    year: "2024 – 2025",
    color: "#78716C", // fixed for C / C++ / Parallel Architectures projects
    description: "Operating Systems and Parallel Computing coursework across two degrees — UnB and ENSICAEN — covering process management, concurrency, memory, CPU scheduling, and shared-memory parallel programming with OpenMP.",
    fullDescription: "Operating Systems coursework taken twice across two degrees, plus a Parallel Computing course, forming a broader systems-programming track between UnB and ENSICAEN.", // fallback only — real content lives in the detail file
    images: [],
    tags: ["C", "C++", "POSIX", "OpenMP", "Parallel Computing", "Process Scheduling", "Memory Management", "IPC", "Concurrency", "Linux", "Others"],
    hasDemo: false,
    demoUrl: "",
    githubUrl: "https://github.com/ViniciusGN/Operating-System",
  },
];