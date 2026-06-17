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

export interface ProjectLinks {
  paper?: string;
  report?: string;
}

// A single piece of content inside a grid row.
// "text"  — a paragraph, optionally with its own small heading.
// "image" — a captioned image.
// "note"  — a highlighted callout box (accent-blue, blockquote-style),
//           used for asides, caveats, or anything worth visually flagging.
export type ContentBlock =
  | { type: "text"; heading?: string; body: string }
  | { type: "image"; src: string; caption: string; alt: string }
  | { type: "note"; body: string };

// A row in the detail layout grid. One block fills the row's full width;
// two blocks sit side by side as a two-column pair (text+image, image+image,
// text+text, etc). The author decides the pairing per row.
export interface ContentRow {
  columns: ContentBlock[];
}

export interface ProjectDetail {
  slug: string;
  fullDescription: string[];
  rows: ContentRow[];
  team: TeamMember[];
  institutions: Institution[];
  highlights: string[];
  links: ProjectLinks;
}