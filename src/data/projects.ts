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
    year: "2024",
    color: "#2563EB",
    description:
      "Interactive research tool for exploring Physical-Layer Authentication using CSI fingerprinting and Siamese CNNs. Visualizes model performance, confusion matrices, and signal patterns.",
    fullDescription:
      "Physical-Layer Authentication (PLA) Explorer is an interactive research application that allows users to explore the results of a Siamese CNN trained on WiFi CSI (Channel State Information) data for device authentication. The app provides live simulations of authentication scenarios, confusion matrix visualizations, and comparative analysis of signal fingerprints across different environments.",
    images: [],
    tags: ["CSI Fingerprint", "Siamese CNN", "PyTorch", "React", "Vite", "AI", "AI Security", "Cybersecurity"],
    hasDemo: true,
    demoUrl: "https://vmnascimento.com/pla-explorer",
    githubUrl: "https://github.com/ViniciusGN/pla-explorer",
  },
  {
    title: "RF Fingerprinting for GNSS Spoofing Detection",
    slug: "gnss-spoofing",
    year: "2023",
    color: "#7C3AED",
    description:
      "Machine learning pipeline for detecting GNSS spoofing attacks using radio-frequency fingerprinting techniques on raw signal data.",
    fullDescription:
      "A machine learning pipeline that extracts RF fingerprints from raw GNSS signal captures and trains a classifier to distinguish authentic signals from spoofed ones. Evaluated on multiple spoofing scenarios including meaconing and signal injection.",
    images: [],
    tags: ["RF Fingerprinting", "GNSS", "Spoofing Detection", "Python", "scikit-learn", "Cybersecurity", "AI Security"],
    hasDemo: false,
    demoUrl: "",
    githubUrl: "https://github.com/ViniciusGN/gnss-spoofing",
  },
  {
    title: "Wireless Intrusion Detection with ML",
    slug: "wireless-ids",
    year: "2023",
    color: "#059669",
    description:
      "Anomaly detection system for 802.11 networks using unsupervised learning to identify deauthentication attacks and rogue APs.",
    fullDescription:
      "An unsupervised anomaly detection system applied to 802.11 (WiFi) network traffic. Uses autoencoders and isolation forests to identify deauthentication flood attacks, evil twin APs, and other wireless intrusion patterns without requiring labeled training data.",
    images: [],
    tags: ["802.11", "Anomaly Detection", "Autoencoder", "Python", "Scapy", "Cybersecurity", "AI"],
    hasDemo: false,
    demoUrl: "",
    githubUrl: "https://github.com/ViniciusGN/wireless-ids",
  },
  {
    title: "OS Process Communication via Tubes",
    slug: "os-tubes",
    year: "2022",
    color: "#D97706",
    description:
      "Low-level operating systems project implementing inter-process communication primitives using named and unnamed pipes on Linux.",
    fullDescription:
      "An operating systems course project implementing inter-process communication (IPC) from scratch using POSIX pipes (named and unnamed) on Linux. Covers producer-consumer patterns, synchronization with semaphores, and process lifecycle management.",
    images: [],
    tags: ["Pipes", "IPC", "Semaphores", "C", "Linux", "POSIX", "Others"],
    hasDemo: false,
    demoUrl: "",
    githubUrl: "https://github.com/ViniciusGN/os-tubes",
  },
];
