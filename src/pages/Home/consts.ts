export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  tags: string[];
};

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

export const PROFILE_NAME = 'Elena';
export const PROFILE_ROLE = 'FRONT-END ARCHITECT';
export const PROFILE_INITIALS = 'EC';
export const PROFILE_IMAGE_URL = '/images/profile-reference.png';

export const PERSONAL_INFO = [
  { label: 'Birth Year', value: '1990' },
  { label: 'Psychology', value: 'Basic' },
  { label: 'Work', value: '8 years' },
  { label: 'School', value: 'Berlin' },
] as const;

export const SKILLS = [
  'React.js',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Redux Toolkit',
  'GraphQL',
  'Jest',
] as const;

export const EDUCATION_TITLE = 'Education';
export const EDUCATION_PERIOD = '2016 - 2020';
export const EDUCATION_DEGREE = 'B.Sc. in Computer Science';
export const EDUCATION_SCHOOL = 'University of Technology';

export const CONTACT_TITLE = 'Contact';
export const CONTACT_EMAIL_LABEL = 'mail';
export const CONTACT_EMAIL_VALUE = 'elena@digital-curator.dev';
export const CONTACT_LOCATION_LABEL = 'location_on';
export const CONTACT_LOCATION_VALUE = 'Berlin, Germany';

export const HERO_TITLE_PREFIX = 'Crafting Scalable User Interfaces with';
export const HERO_TITLE_EMPHASIS = 'Technical Precision.';
export const HERO_BODY =
  'As a Front-End Architect specializing in the React ecosystem, I bridge the gap between complex engineering and editorial design.';
export const HERO_BODY_SECONDARY =
  'My approach is rooted in the philosophy of "The Digital Curator" where every component is intentionally placed and every interaction is refined for clarity.';
export const HERO_BODY_TERTIARY =
  'With 5+ years of experience, I lead teams to build design systems that scale, ensuring performance is never sacrificed for aesthetics.';

export const EXPERIENCE_TITLE = 'Work Experience';
export const EXPERIENCE_SIDE_LABEL = 'Detailed History';

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Senior Front-End Engineer',
    company: 'Nexus Flow Systems',
    period: '2021 - PRESENT',
    summary:
      'Leading the migration of a legacy monolithic dashboard to a modern micro-frontend architecture using Next.js and Module Federation.',
    tags: ['Architecture', 'Team Leadership', 'Design Ops'],
  },
  {
    role: 'React Developer',
    company: 'Lumina Creative Agency',
    period: '2018 - 2021',
    summary:
      'Delivered high-performance landing pages and complex web applications, with strong focus on interactive brand storytelling.',
    tags: ['Animation', 'E-commerce', 'Client Focus'],
  },
];

export const EXPERTISE_TITLE = 'Technical Expertise';
export const EXPERTISE_SUBTITLE = 'Quantifying the craft of interface architecture.';
export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  { label: 'React Architecture', value: 95 },
  { label: 'Performance Audit', value: 88 },
  { label: 'TypeScript Logic', value: 92 },
  { label: 'State Management', value: 93 },
];

export const QUOTE_TITLE = 'Key Philosophy';
export const QUOTE_TEXT =
  'Clean code is not just about functionality; it is about creating a sustainable and predictable environment that others can contribute to confidently.';

export const PROJECTS_TITLE = 'Curated Projects';
export const PROJECTS: ProjectItem[] = [
  {
    name: 'Aether Dashboard',
    subtitle: 'Analytics platform for growth teams',
    cta: 'View case study',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Editorial UI Kit',
    subtitle: 'Design system for content products',
    cta: 'View case study',
    imageUrl:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=80',
  },
];
