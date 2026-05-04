import type { FormInstance } from 'antd';

import type { CVContentForm } from './CVContentForm';
import { generateGeminiContent } from '../../api/gemini';
import { setAboutMe } from '../Home/CVText/cvText';
import { buildMockGeminiResponse } from './mockData';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

type GeminiRequestPayload = {
  contents: {
    parts: {
      text: string;
    }[];
  }[];
};

export const handleMessageSubmit = async (
  { message }: CVContentForm, 
  form: FormInstance<CVContentForm>, 
  setMessage: (message: string) => void,
  openNotificationWithIcon: (type: NotificationType, description: string) => void
): ReturnType<typeof generateGeminiContent> => {
  const isMockModeEnabled =
    import.meta.env.VITE_GEMINI_USE_MOCK === 'true' || !import.meta.env.VITE_GEMINI_API_KEY;

  const payload: GeminiRequestPayload = {
    contents: [
      {
        parts: [
          {
            text: message,
          },
        ],
      },
    ],
  };
  try {
    const response = isMockModeEnabled
      ? buildMockGeminiResponse(message)
      : await generateGeminiContent<GeminiRequestPayload>(payload);

    form.resetFields();
    setMessage(response.candidates?.[0]?.content?.parts?.[0]?.text || '');
    setAboutMe(response.candidates?.[0]?.content?.parts?.[0]?.text || '');
    openNotificationWithIcon(
      'success',
      isMockModeEnabled ? 'Mock text generated successfully' : 'Text generated successfully'
    );
    return response;
  } catch (error) {
    const description = error instanceof Error ? error.message : 'Something went wrong while generating text.';
    openNotificationWithIcon('error', description);
    return { candidates: [] };
  }
};
