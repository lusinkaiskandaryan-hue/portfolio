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
    company: 'Swiftech',
    period: '2025 - PRESENT',
    summary:
      'Delivering high-performance complex web applications with real-time data streaming and state management using React, Redux, TypeScript, Socket.IO, Ant Design.',
  },
  {
    role: 'Front-End Engineer',
    company: 'VOLO',
    period: '2019 - 2025',
    summary:
      'Delivered high-performance web applications, wrote Clean, Maintainable Code, worked with juniors and interns.',
  },
];
