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
  { key: '/gemini', label: 'Gemini' },
  { key: '/experience', label: 'Experience' },
  // { key: '/expertise', label: 'Expertise' },
  // { key: '/education', label: 'Education' },
  { key: '/contact', label: 'Contact' },
];
