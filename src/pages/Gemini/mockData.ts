type GeminiGenerateContentResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
};

export const buildMockGeminiResponse = (source: string): GeminiGenerateContentResponse => {
  const normalized = source.trim();

  const text = [
    '## About Me',
    '',
    normalized
      ? `I am a frontend engineer focused on React, TypeScript, and UX quality. ${normalized}`
      : 'I am a frontend engineer focused on React, TypeScript, and UX quality.',
    '',
    '## Core Strengths',
    '',
    '- React and TypeScript application development',
    '- API integration and reliable error handling',
    '- Clean component architecture and maintainable styling',
  ].join('\n');

  return {
    candidates: [
      {
        content: {
          parts: [{ text }],
        },
      },
    ],
  };
};

/** Short plain-text reply for the portfolio chat demo when mock mode is on. */
export const buildMockChatAnswer = (question: string): string => {
  const q = question.trim();
  if (!q) {
    return 'Ask me about my stack, how I work with teams, or what kinds of projects I like to take on.';
  }
  const lead = q.length > 90 ? `${q.slice(0, 90)}…` : q;
  return [
    `On “${lead}”: I’d align on goals and constraints first, then suggest a pragmatic path.`,
    'I usually favor typed React on the client, clear API contracts, and shipping in small, testable slices.',
    'If you share timeline and stack, I can be more specific.',
  ].join(' ');
};
