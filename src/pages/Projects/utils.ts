import type { Project } from './consts';

export const getProjectKey = (project: Project): string => project.name;
