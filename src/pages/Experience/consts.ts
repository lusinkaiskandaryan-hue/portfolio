export type Project = {
  name: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
};

export const PAGE_TITLE = 'Experience & Projects';
export const PAGE_SUBTITLE = 'My professional experience and selected frontend projects.';
export const LIVE_DEMO_TEXT = 'Live Demo';
export const REPOSITORY_TEXT = 'Repository';

export const PROJECTS: Project[] = [
  {
    name: 'Project One',
    description: 'Short project description focusing on problem, solution and impact.',
    technologies: ['React', 'TypeScript', 'Antd'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    name: 'Project Two',
    description: 'Another project summary. Mention business or user value.',
    technologies: ['Vite', 'React Query', 'Jest'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
];
