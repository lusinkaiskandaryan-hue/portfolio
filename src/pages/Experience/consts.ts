export type Project = {
  name: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
  subtitle: string;
  cta: string;
  imageUrl: string;
};

export const PROJECTS_TITLE = 'Curated Projects';

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
    subtitle: 'Analytics platform for growth teams',
    cta: 'View case study',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Project Two',
    description: 'Another project summary. Mention business or user value.',
    technologies: ['Vite', 'React Query', 'Jest'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    subtitle: 'Design system for content products',
    cta: 'View case study',
    imageUrl:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=80',
  },
];
