export type NavItem = {
  key: string;
  label: string;
};

export const BRAND_TITLE = 'The Digital Curator';
export const DOWNLOAD_BUTTON_TEXT = 'Download PDF';
export const FOOTER_LINKS = [
  { label: 'LINKEDIN', href: 'https://linkedin.com' },
  { label: 'GITHUB', href: 'https://github.com' },
  { label: 'TWITTER', href: 'https://twitter.com' },
] as const;

export const FOOTER_TEXT = 'The Digital Curator. Crafted with React and TypeScript.';

export const NAV_ITEMS: NavItem[] = [
  { key: '/home', label: 'Home' },
  { key: '/home#experience', label: 'Experience' },
  { key: '/home#expertise', label: 'Expertise' },
  { key: '/home#education', label: 'Education' },
  { key: '/home#contact', label: 'Contact' },
];
