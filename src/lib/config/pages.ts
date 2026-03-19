import Site from './common';

export const HomeSocialLinks = [
  { href: Site.out.github, text: 'GitHub', iconName: 'github' as const },
  { href: Site.out.linkedin, text: 'LinkedIn', iconName: 'linkedin' as const },
];

export interface ExperienceTimelineItem {
  company: string;
  role: string;
  url: string;
  logoUrl: string;
  logoAlt: string;
  startDate: string;
  endDate?: string;
  details?: string;
  logoScale?: number;
}

export const careerStatus = {
  roles: ["Full Stack", "Frontend", "Backend"],
  environments: ["Remote", "Hybrid", "On-site"],
  openTo: "Startups, scale-ups, or any team building something interesting.",
  ctaLabel: "View Resume",
  ctaHref: "/resume",
};

export interface CurrentlyItem {
  type: "building" | "learning" | "obsessed with";
  label: string;
  href?: string;
}

export const currently: CurrentlyItem[] = [
  { type: "building", label: "This portfolio site", href: "https://github.com/AnthonyArteaga/personal-site" },
  { type: "learning", label: "AWS architecture SAA" },
  { type: "obsessed with", label: "Eating good food" },
];

export const experienceTimeline: ExperienceTimelineItem[] = [
  {
    company: 'Acme Corp',
    role: 'Senior Engineer',
    url: 'https://example.com',
    logoUrl: '/logos/placeholder.svg',
    logoAlt: 'Acme Logo',
    startDate: '2024-01-01',
    details: 'Building scalable web applications and leading the frontend team.',
  },
  {
    company: 'StartupCo',
    role: 'Full Stack Dev',
    url: 'https://example.com',
    logoUrl: '/logos/placeholder.svg',
    logoAlt: 'StartupCo Logo',
    startDate: '2022-06-01',
    endDate: '2023-12-01',
    details: 'Built the MVP from scratch. Grew the product to 10k users.',
  },
];
