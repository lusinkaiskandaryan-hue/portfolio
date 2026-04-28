export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  tags: string[];
};

export type ExperienceSectionProps = {
  title: string;
  sideLabel: string;
  items: ExperienceItem[];
  cardId?: string;
};

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
