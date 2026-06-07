export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Machine Learning",
    skills: ["PyTorch", "scikit-learn", "TensorFlow", "CNNs", "Autoencoders", "Siamese Networks"],
  },
  {
    label: "Wireless & RF",
    skills: ["CSI Fingerprinting", "RF Fingerprinting", "802.11", "GNSS", "Signal Processing", "SDR"],
  },
  {
    label: "Cybersecurity",
    skills: ["Physical-Layer Auth", "Spoofing Detection", "IDS/IPS", "Network Forensics", "Adversarial ML"],
  },
  {
    label: "Programming",
    skills: ["Python", "C/C++", "TypeScript", "React", "Rust (learning)"],
  },
  {
    label: "Tools & Infra",
    skills: ["Linux", "Git", "Docker", "Wireshark", "Scapy", "GNU Radio"],
  },
  {
    label: "Research",
    skills: ["LaTeX", "Academic Writing", "Experimental Design", "Data Analysis", "Matplotlib"],
  },
];
