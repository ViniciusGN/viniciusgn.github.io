export interface TeamMember {
  name: string;
  role: string;
  institution?: string;
  url?: string;
}

export interface Institution {
  name: string;
  url?: string;
  logo?: string;
}

export interface ProjectImage {
  src: string;
  caption: string;
  alt: string;
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface ProjectLinks {
  paper?: string;
  report?: string;
}

export interface ProjectDetail {
  slug: string;
  fullDescription: string[];
  sections: ProjectSection[];
  team: TeamMember[];
  institutions: Institution[];
  images: ProjectImage[];
  highlights: string[];
  links: ProjectLinks;
}