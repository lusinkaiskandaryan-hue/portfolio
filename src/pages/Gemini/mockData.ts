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
