import type { ExperienceItem } from './consts';

export const getExperienceKey = (item: ExperienceItem): string => `${item.role}-${item.period}`;
