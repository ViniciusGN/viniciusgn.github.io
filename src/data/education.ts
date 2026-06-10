export interface Education {
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

export const education: Education[] = [
  {
    role: "M.Sc. Computer Engineering",
    organization: "ENSICAEN",
    url: "https://www.ensicaen.fr",
    period: "Sep 2024 – Sep 2026",
    type: "academia",
    initials: "EN",
    logo: "/images/projects/Ensicaen_logo.png",
    description: [
      "Specialisation in Cybersecurity and Artificial Intelligence. Double-degree programme with UnB (Brazil).",
      "International academic merit scholarship — BRAFITEC programme (Brazil-France university exchange).",
    ],
    tags: ["Cybersecurity", "AI", "Double Degree", "BRAFITEC"],
  },
  {
    role: "B.Eng. Communications Network Engineering",
    organization: "Universidade de Brasília (UnB)",
    url: "https://www.unb.br",
    period: "Aug 2017 – Dec 2026",
    type: "academia",
    initials: "UnB",
    logo: "/images/projects/unb_logo.png",
    description: [
      "Pursued in parallel with military service as a Temporary Signals Officer and international exchange in France.",
      "Teaching assistant for Transport Protocols and Routing, and Algorithms and Data Structures.",
    ],
    tags: ["Telecommunications", "Networking", "Cybersecurity", "Teaching Assistant"],
  },
];