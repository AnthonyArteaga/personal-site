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
  { title: 'Resume', href: '/resume.pdf', external: true },
];
