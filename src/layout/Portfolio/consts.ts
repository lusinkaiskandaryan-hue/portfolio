export type NavItem = {
  key: string;
  label: string;
};

export const DOWNLOAD_BUTTON_TEXT = 'Download PDF';
export const CV_PDF_PATH = '/Lusine-Iskandaryan-CV.pdf';
export const CV_PDF_FILENAME = 'Lusine-Iskandaryan-CV.pdf';
export const FOOTER_LINKS = [
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/lusine-iskandaryan-76150b152/' },
  { label: 'GITHUB', href: 'https://github.com' },
] as const;

export const FOOTER_TEXT = 'Lusine Iskandaryan. Built with React and TypeScript leveraging Cursor for AI-assisted development.';

export const NAV_ITEMS: NavItem[] = [
  { key: '/home', label: 'Home' },
  // { key: '/did', label: 'D_ID' },
  // { key: '/gemini', label: 'Gemini' },
  { key: '/experience', label: 'Experience' },
  // { key: '/expertise', label: 'Expertise' },
  // { key: '/education', label: 'Education' },
  { key: '/contact', label: 'Contact' },
];
