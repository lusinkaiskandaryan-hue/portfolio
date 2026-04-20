import type { Rule } from 'antd/es/form';

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export const SECTION_TITLE = 'Contact';
export const SECTION_SUBTITLE = 'Let us discuss your next project.';
export const NAME_PLACEHOLDER = 'Your name';
export const EMAIL_PLACEHOLDER = 'you@email.com';
export const MESSAGE_PLACEHOLDER = 'Tell me about your project...';
export const SUBMIT_BUTTON_TEXT = 'Send message';
export const FOOTER_TEXT =
  'You can also add links to Telegram, LinkedIn, Upwork, or your preferred contact channel.';

export const NAME_RULES: Rule[] = [{ required: true, message: 'Please input your name.' }];
export const EMAIL_RULES: Rule[] = [
  { required: true, message: 'Please input your email.' },
  { type: 'email', message: 'Please enter a valid email.' },
];
export const MESSAGE_RULES: Rule[] = [{ required: true, message: 'Please write a short message.' }];
