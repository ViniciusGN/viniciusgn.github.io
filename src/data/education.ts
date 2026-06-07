export interface Education {
  role: string;
  organization: string;
  url: string;
  period: string;
  type: "academia" | "company" | "other";
  initials: string;
  description: string;
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
    description:
      "Double-degree programme specialising in Cybersecurity and Artificial Intelligence. International merit scholarship recipient through the BRAFITEC programme.",
    tags: [
      "Cybersecurity",
      "Artificial Intelligence",
      "Machine Learning",
      "Research"
    ]
  },

  {
    role: "B.Eng. Communications Network Engineering",
    organization: "University of Brasília (UnB)",
    url: "https://www.unb.br",
    period: "Aug 2017 – Dec 2026",
    type: "academia",
    initials: "UNB",
    description:
      "Communications Network Engineering degree focused on telecommunications, networking and cybersecurity. Teaching assistant in Algorithms and Transport Protocols & Routing.",
    tags: [
      "Telecommunications",
      "Networking",
      "Cybersecurity",
      "Teaching Assistant"
    ]
  }
];