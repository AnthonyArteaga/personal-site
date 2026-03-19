const Site = {
  name: 'Your Name',
  url: 'https://yoursite.dev',
  description: 'Your tagline or description here.',
  tags: ['Developer', 'Software Engineer', 'Your City'],
  seo: {
    author: 'Your Name',
    location: { city: 'Your City', region: 'Your State', country: 'US' },
  },
  out: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    calcom: 'https://cal.com/yourusername/15min',
    x: 'https://x.com/yourusername',
  },
} as const;

export default Site;

export interface Social {
  url: string;
  label: string;
  iconName: 'github' | 'linkedin' | 'x';
  footer: boolean;
}

export const Socials: Social[] = [
  { url: Site.out.github, label: 'GitHub', iconName: 'github', footer: true },
  { url: Site.out.linkedin, label: 'LinkedIn', iconName: 'linkedin', footer: true },
  { url: Site.out.x, label: 'X', iconName: 'x', footer: true },
];
