import type { Chat } from '../utils';

export const geminiChatDemo: Chat = [
  {
    id: 'demo-1',
    question: 'What technologies do you recommend for a SaaS MVP?',
    answer:
      'For a SaaS MVP, I usually reach for a typed React or Next.js frontend, a lean API layer (Node or a managed BaaS), PostgreSQL for the core data model, and solid auth plus observability from day one—so you can ship quickly without painting yourself into a corner.',
  },
  {
    id: 'demo-2',
    question: 'Are you open to short freelance engagements?',
    answer:
      'Yes—depending on fit and timing I take focused engagements, especially when the scope is clear and we can agree on outcomes up front. The fastest path is to share goals, stack, and timeline.',
  },
];

export const geminiChatSectionCopy = {
  badgeLabel: 'AI INTERACTIVE',
  title: 'Ask my AI Assistant',
  description:
    'My digital twin is here to answer your questions in real-time.',
  inputPlaceholder: 'Type your question...',
  fallbackReply:
    'I could not generate a detailed answer just now. Try rephrasing or ask something more specific.',
  errorReply: 'Something went wrong while fetching a reply. Please try again in a moment.',
  assistantLoadingLabel: 'Thinking…',
} as const;
