import type { Rule } from 'antd/es/form';

export type ContactForm = {
  fromName: string;
  message: string;
};

export const SECTION_TITLE = 'Let’s Collaborate.';
export const SECTION_SUBTITLE = 'Let’s Build Something Together.';
export const NAME_PLACEHOLDER = 'Your name';
export const MESSAGE_PLACEHOLDER = 'Write your message here…';
export const SUBMIT_BUTTON_TEXT = 'Send message';
export const FOOTER_TEXT =
  'You can also add links to Telegram, LinkedIn, Upwork, or your preferred contact channel.';

export const NAME_RULES: Rule[] = [{ required: true, message: 'Please input your name.' }];
export const MESSAGE_RULES: Rule[] = [{ required: true, message: 'Please write a short message.' }];
