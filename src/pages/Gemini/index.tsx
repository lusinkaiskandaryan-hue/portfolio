import { useState } from 'react';
import { Button, Card, Form, Input, Space, Typography } from 'antd';
import { markdown } from 'markdown';

import { SectionTitle } from '../../components/SectionTitle';
import { GeminiChatSection } from './ChatSection';
import {
  MESSAGE_PLACEHOLDER,
  MESSAGE_RULES,
  SECTION_TITLE,
  SUBMIT_BUTTON_TEXT,
  type CVContentForm,
} from './CVContentForm';
import { pageContainerClassName } from './styles';
import { handleMessageSubmit } from './utils';
import { useNotification } from '../../utils/notifications';

export const GeminiPage = () => {
  const { openNotificationWithIcon } = useNotification();
  const [form] = Form.useForm<CVContentForm>();
  const [message, setMessage] = useState<string>('');
  const html = markdown.toHTML(message);

  return (
    <>
      <Space direction="vertical" size={24} className={pageContainerClassName}>
        <SectionTitle title={SECTION_TITLE} />
        <Card>
          <Form form={form} layout="vertical" onFinish={(values) => handleMessageSubmit(values, form, setMessage, openNotificationWithIcon)}>
            <Form.Item name="message" label="About you" rules={MESSAGE_RULES}>
              <Input.TextArea rows={5} placeholder={MESSAGE_PLACEHOLDER} />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              {SUBMIT_BUTTON_TEXT}
            </Button>
          </Form>
        </Card>
        <GeminiChatSection />
      </Space>
      {message && 
      <Typography.Paragraph className="home-hero__body">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Typography.Paragraph>}
    </>    
  );
};
