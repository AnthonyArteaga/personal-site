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
