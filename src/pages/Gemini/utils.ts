import type { FormInstance } from 'antd';

import type { CVContentForm } from './CVContentForm';
import { generateGeminiContent } from '../../api/gemini';
import { setAboutMe } from '../Home/CVText/cvText';

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
    const response = await generateGeminiContent<GeminiRequestPayload>(payload);
    form.resetFields();
    setMessage(response.candidates?.[0]?.content?.parts?.[0]?.text || '');
    setAboutMe(response.candidates?.[0]?.content?.parts?.[0]?.text || '');
    openNotificationWithIcon('success', 'Text generated successfully');
    return response;
  } catch (error) {
    const description = error instanceof Error ? error.message : 'Something went wrong while generating text.';
    openNotificationWithIcon('error', description);
    return { candidates: [] };
  }
};
