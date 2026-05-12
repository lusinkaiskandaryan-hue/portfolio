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

export const PROJECTS_TITLE = 'Selected Works';

export const SELECTED_WORKS_CTA_TITLE_PRIMARY = 'Have a project';
export const SELECTED_WORKS_CTA_TITLE_ACCENT = 'In mind?';
export const SELECTED_WORKS_CTA_BODY =
  "Let's discuss how we can build something exceptional together.";
export const SELECTED_WORKS_CTA_BUTTON = 'Start a conversation';

export const PAGE_TITLE = 'Experience & Projects';
export const PAGE_SUBTITLE = 'My professional experience and selected frontend projects.';
export const LIVE_DEMO_TEXT = 'Live Demo';
export const REPOSITORY_TEXT = 'Repository';

export const PROJECTS: Project[] = [
  {
    name: 'Flexxi Care',
    description: '',
    technologies: ['React', 'Redux', 'TypeScript', 'Axios', 'Antd'],
    demoUrl: 'https://flexxi.care/',
    repoUrl: '',
    subtitle: 'FLEXXI is an innovative, flexxi-ble solution to caregiving: connecting caregivers and ckients in need of respite care.',
    cta: '',
    imageUrl: '/images/flexxi-care.png',
  },
  {
    name: 'Raiser',
    description: '',
    technologies: ['Angular', 'NGRX', 'RxJS', 'TypeScript'],
    demoUrl: 'https://spark.work/',
    repoUrl: '',
    subtitle: 'Raiser is a HR system that used for time tracking, generating time-off requests, and setting up work schedules.',
    cta: '',
    imageUrl: '/images/raiser.jpg',
  },
  {
    name: 'Assets Management System (AMS)',
    description: '',
    technologies: ['Angular', 'NGRX', 'RxJS', 'TypeScript'],
    demoUrl: '',
    repoUrl: '',
    subtitle: 'AMS is an asset management system that makes the process of company owned asset tracking more consistent, efficient and transparent.',
    cta: '',
    imageUrl: '/images/assets.jpeg',
  },
  {
    name: 'ECO Module',
    description: '',
    technologies: ['Angular', 'NGRX', 'RxJS', 'TypeScript'],
    demoUrl: '',
    repoUrl: '',
    subtitle: 'Eco module is a system that facilitates the process of tracking green credits and also generates reports.',
    cta: '',
    imageUrl: '/images/eco-module.jpeg',
  },
  {
    name: 'Tradecloud',
    description: '',
    technologies: ['Angular', 'NGRX', 'RxJS', 'TypeScript'],
    demoUrl: '',
    repoUrl: '',
    subtitle: 'TradeCloud is a secure web-based platform that connects the physical commodity community together, allowing producers, consumers and traders to communicate and conclude physical transactions with each other in an efficient, organized, complaint and fully modernized digital environment',
    cta: '',
    imageUrl: '/images/trade-cloud.jpeg',
  },
  {
    name: 'Efugames',
    description: '',
    technologies: ['React', 'Redux', 'TypeScript', 'Axios', 'Antd'],
    demoUrl: '',
    repoUrl: '',
    subtitle: 'Efugames specializes in delivery of betting and gaming services to its customers.',
    cta: '',
    imageUrl: '/images/efu-bet.png',
  },
];
