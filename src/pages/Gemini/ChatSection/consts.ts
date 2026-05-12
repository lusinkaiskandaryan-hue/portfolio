import type { Chat } from '../utils';

export const geminiChatDemo: Chat = [];

export const geminiChatSectionCopy = {
  badgeLabel: 'Try prompts like "show resume", "summarize experience", or "write a short recruiter intro".',
  title: 'Ask AI Assistant About the Portfolio',
  description:
    'My digital twin is here to answer your questions in real-time.',
  inputPlaceholder: 'Type your question...',
  fallbackReply:
    'I could not generate a detailed answer just now. Try rephrasing or ask something more specific.',
  errorReply: 'Something went wrong while fetching a reply. Please try again in a moment.',
  assistantLoadingLabel: 'Thinking…',
} as const;
