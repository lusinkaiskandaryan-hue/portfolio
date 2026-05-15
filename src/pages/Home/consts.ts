export type ExpertiseItem = {
  label: string;
  value: number;
};

export type ProjectItem = {
  name: string;
  subtitle: string;
  cta: string;
  imageUrl: string;
};

export const PROFILE_NAME = 'Lusine Iskandaryan';
export const PROFILE_ROLE = 'SOFTWARE ENGINEER';
export const PROFILE_INITIALS = 'EC';
export const PROFILE_IMAGE_URL = '/images/profile.png';

export const PERSONAL_INFO = [
  { label: 'Birth Year', value: '1985' },
  { label: 'Education', value: 'Bachelor' },
  { label: 'Work', value: '7 years' },
  { label: 'School', value: 'N 4' },
] as const;

export const SKILLS = [
  'React',
  'Redux',
  'Axios',
  'TypeScript',
  'Angular 2+',
  'RxJS',
  'NgRx',
  'Ant Design',
  'HTML5/CSS3',
  'Figma',
  'Git',
  'Agile / Scrum',
  'Cursor',
  'Gemini',
] as const;

export const SOFT_SKILLS = [
  'Teamwork',
  'Communication',
  'Problem-solving',
  'Time management',
  'Adaptability',
  'Negotiation',
] as const;

export const EDUCATION_TITLE = 'Education';
export const EDUCATION_PERIOD = '2002 - 2006';
export const EDUCATION_DEGREE = 'Microelectronics and Semiconductor Devices';
export const EDUCATION_SCHOOL = 'National Polytechnic University of Armenia';

export const CONTACT_TITLE = 'Contact';
export const CONTACT_EMAIL_LABEL = 'mail';
export const CONTACT_EMAIL_VALUE = 'lusine.iskandarian@gmail.com';
export const CONTACT_LOCATION_LABEL = 'location';
export const CONTACT_LOCATION_VALUE = 'Yerevan, Armenia';
export const CONTACT_PHONE_LABEL = 'phone';
export const CONTACT_PHONE_VALUE = '+374 95 91 20 30';

export const HERO_TITLE_PREFIX = 'Professional Bio.';
export const HERO_BODY = 
  'Experienced Front-End Engineer with 7 years of expertise in designing and developing modern web applications.';
export const HERO_BODY_SECONDARY =
  'Skilled in React, Angular, TypeScript, and frontend architecture, with a strong passion for innovation and continuous improvement.';
export const HERO_BODY_TERTIARY =
  'Adept at transforming complex requirements into intuitive, high-performance user experiences while contributing effectively within cross-functional teams.';

export const EXPERTISE_TITLE = 'Technical Expertise';
export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  { label: 'React', value: 90 },
  { label: 'Angular', value: 95 },
  { label: 'TypeScript', value: 92 },
  { label: 'State Management', value: 93 },
  { label: 'Performance Audit', value: 88 },
  { label: 'AI Integration (LLMs)', value: 2 },
];

export const QUOTE_TITLE = 'Key Philosophy';
export const QUOTE_TEXT =
  'Clean code is not just about functionality; it is about creating a sustainable and predictable environment that others can contribute to confidently.';

