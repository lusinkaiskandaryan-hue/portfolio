import { generateGeminiContent } from '../../../api/gemini';
import { buildMockChatAnswer } from '../mockData';
import { geminiChatSectionCopy } from './consts';

type GeminiChatPayload = {
  contents: {
    parts: {
      text: string;
    }[];
  }[];
};

const CHAT_SYSTEM_PREFIX = [
  'You are a concise, friendly portfolio assistant for a software engineer.',
  'Answer in plain text only, at most 120 words, no markdown headings or bullet lists.',
  'Be helpful and specific; if the question is vague, say what you would need to know next.',
  '',
  'User question:',
].join('\n');

const MOCK_CHAT_DELAY_MS = 720;

export async function requestGeminiChatReply(question: string): Promise<string> {
  const isMockModeEnabled =
    import.meta.env.VITE_GEMINI_USE_MOCK === 'true' || !import.meta.env.VITE_GEMINI_API_KEY;

  const prompt = `${CHAT_SYSTEM_PREFIX}\n${question.trim()}`;

  const payload: GeminiChatPayload = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
  };

  if (isMockModeEnabled) {
    await new Promise<void>((resolve) => {
      setTimeout(resolve, MOCK_CHAT_DELAY_MS);
    });
    return buildMockChatAnswer(question);
  }

  const response = await generateGeminiContent<GeminiChatPayload>(payload);
  const text = response.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  return text && text.length > 0 ? text : geminiChatSectionCopy.fallbackReply;
}
