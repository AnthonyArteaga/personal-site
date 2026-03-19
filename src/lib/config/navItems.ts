export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export const mainNavItems: NavItem[] = [
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
];

export const moreNavItems: NavItem[] = [
  { title: 'Resume', href: '/resume.pdf', external: true },
];
