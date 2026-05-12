export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
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
    company: 'SWIFTECH',
    period: '2025 - PRESENT',
    summary:
      'Delivering high-performance complex web applications with real-time data streaming and state management.',
  },
  {
    role: 'Mid-Level Front-End Engineer',
    company: 'VOLO',
    period: '2019 - 2025',
    summary:
      'Delivered high-performance web applications, wrote clean, maintainable code, worked with juniors and interns.',
  },
  {
    role: 'JuniorFront-End Engineer',
    company: 'EFUSOFT',
    period: '2018 - 2019',
    summary:
      'Wrote clean, maintainable code, debugged and troubleshot application issues, collaborated with designers and back-end developers.',
  },
  {
    role: 'Intern Front-End Engineer',
    company: 'FAMBOX',
    period: '2019 - 2025',
    summary:
      'Wrote clean code, debugged, collaborated with designers and back-end developers.',
  }
];
