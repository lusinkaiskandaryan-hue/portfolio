import axios from 'axios';

type GeminiGenerateContentResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
};

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export const v1BetaURL = 'https://generativelanguage.googleapis.com/v1beta';

export const generateGeminiContent = async <T>(payload: T): Promise<GeminiGenerateContentResponse> => {
  const response = await axios.post<GeminiGenerateContentResponse>(
    `${v1BetaURL}/models/gemini-3-flash-preview:generateContent`, 
    payload, 
    {
      params: {
        key: apiKey,
      },
      headers: {
        'Content-Type': 'application/json',
      },
  });
  return response.data;
}
