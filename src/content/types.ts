/** A month as "YYYY-MM"; formatted per locale at render time. */
export type YearMonth = `${number}-${number}`;

export type Role = {
  organization: string;
  role: string;
  start: YearMonth;
  /** null = ongoing */
  end: YearMonth | null;
  /** e.g. "Part-time · Remote (France)" */
  meta?: string;
  summary?: string;
  points: string[];
};

export type Project = {
  title: string;
  description: string;
  kind: string;
  context?: string;
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  detail?: string;
};

export type Resume = {
  name: string;
  shortName: string;
  title: string;
  intro: string;
  about: string[];
  location: string;
  facts: { label: string; value: string }[];
  skillGroups: { title: string; items: string[] }[];
  experience: Role[];
  community: Role[];
  featuredProjects: Project[];
  personalProjects: Project[];
  education: Education[];
  achievements: string[];
  languages: string[];
};
