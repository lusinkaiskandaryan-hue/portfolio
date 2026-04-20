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
export const PROFILE_IMAGE_URL =
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=520&q=80';

export const PERSONAL_INFO = [
  { label: 'Birth Year', value: '1990' },
  { label: 'Psychology', value: 'Basic' },
  { label: 'Work', value: '8 years' },
  { label: 'School', value: 'Berlin' },
] as const;

export const SKILLS = ['React.js', 'TypeScript', 'Redux', 'Tailwind', 'Cloud Tools', 'Animation'] as const;

export const EDUCATION_TITLE = 'Education';
export const EDUCATION_PERIOD = '2016 - 2020';
export const EDUCATION_DEGREE = 'B.Sc. in Computer Science';
export const EDUCATION_SCHOOL = 'University of Technology';

export const CONTACT_TITLE = 'Contact';
export const CONTACT_EMAIL = 'email: elena@digital-curator.io';
export const CONTACT_LOCATION = 'location: Berlin, Germany';

export const HERO_TITLE_PREFIX = 'Crafting Scalable User Interfaces with';
export const HERO_TITLE_EMPHASIS = 'Technical Precision.';
export const HERO_BODY =
  'As a front-end architect specializing in the React ecosystem, I bridge the gap between complex engineering and clean design.';
export const HERO_BODY_SECONDARY =
  'My approach is rooted in intentional UI detail and refined interaction, so every component is crafted for clarity and impact.';

export const EXPERIENCE_TITLE = 'Work Experience';
export const EXPERIENCE_SIDE_LABEL = 'Detailed History';

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Senior Front-End Engineer',
    company: 'Nexus Flow Systems',
    period: '2021 - Present',
    summary:
      'Leading migration of a legacy monolith dashboard to a modern micro-frontend architecture with a strict design system.',
    tags: ['Architecture', 'Team Leadership', 'Design Ops'],
  },
  {
    role: 'React Developer',
    company: 'Lumen Creative Agency',
    period: '2019 - 2021',
    summary:
      'Delivered high-performance landing pages and internal tools for enterprise clients with reusable UI foundations.',
    tags: ['Frontend', 'E-commerce', 'Client Tools'],
  },
];

export const EXPERTISE_TITLE = 'Technical Expertise';
export const EXPERTISE_SUBTITLE = 'Quantifying the craft of interface architecture.';
export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  { label: 'React Architecture', value: 95 },
  { label: 'Design Systems', value: 92 },
  { label: 'Performance Logic', value: 90 },
  { label: 'State Management', value: 93 },
];

export const QUOTE_TITLE = 'My Philosophy';
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
