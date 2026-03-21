export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
  scrollTo?: string;
}

export const mainNavItems: NavItem[] = [
  { title: 'About', href: '/', scrollTo: 'about' },
  { title: 'Projects', href: '/', scrollTo: 'projects' },
];

export const moreNavItems: NavItem[] = [
  { title: 'GitHub', href: 'https://github.com/AnthonyArteaga', external: true },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/anthony-arteaga-0b0800253/', external: true },
];
