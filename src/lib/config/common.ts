const Site = {
  name: 'Anthony Arteaga',
  url: 'https://yoursite.dev',
  description: 'Your tagline or description here.',
  tags: ['Developer', 'Software Engineer', 'New York'],
  seo: {
    author: 'Anthony Arteaga',
    location: { city: 'New York', region: 'NY', country: 'US' },
  },
  out: {
    github: 'https://github.com/AnthonyArteaga',
    linkedin: 'https://www.linkedin.com/in/anthony-arteaga-0b0800253/',
    calcom: 'https://cal.com/yourusername/15min',
  },
} as const;

export default Site;

export interface Social {
  url: string;
  label: string;
  iconName: 'github' | 'linkedin';
  footer: boolean;
}

export const Socials: Social[] = [
  { url: Site.out.github, label: 'GitHub', iconName: 'github', footer: true },
  { url: Site.out.linkedin, label: 'LinkedIn', iconName: 'linkedin', footer: true },
];
