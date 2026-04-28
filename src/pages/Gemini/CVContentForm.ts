import type { Rule } from 'antd/es/form';

export type CVContentForm = {
  message: string;
  // skills: string[];
};

export const SECTION_TITLE = 'CV content';
export const MESSAGE_PLACEHOLDER = 'Tell me about you...';
export const SKILLS_PLACEHOLDER = 'Write your skills...';
export const SUBMIT_BUTTON_TEXT = 'Send message';
export const MESSAGE_RULES: Rule[] = [{ required: true, message: 'Please write a short message.' }];
export const SKILLS_RULES: Rule[] = [{ required: true, message: 'Please write your skills.' }];