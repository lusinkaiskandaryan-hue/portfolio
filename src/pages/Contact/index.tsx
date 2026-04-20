import { Button, Card, Form, Input, Space, Typography } from 'antd';
import { SectionTitle } from '../../components/SectionTitle';
import {
  EMAIL_PLACEHOLDER,
  EMAIL_RULES,
  FOOTER_TEXT,
  MESSAGE_PLACEHOLDER,
  MESSAGE_RULES,
  NAME_PLACEHOLDER,
  NAME_RULES,
  SECTION_SUBTITLE,
  SECTION_TITLE,
  SUBMIT_BUTTON_TEXT,
  type ContactForm,
} from './consts';
import { pageContainerClassName } from './styles';
import { handleContactSubmit } from './utils';

export const ContactPage = () => {
  const [form] = Form.useForm<ContactForm>();

  return (
    <Space direction="vertical" size={24} className={pageContainerClassName}>
      <SectionTitle title={SECTION_TITLE} subtitle={SECTION_SUBTITLE} />

      <Card>
        <Form form={form} layout="vertical" onFinish={(values) => handleContactSubmit(values, form)}>
          <Form.Item name="name" label="Name" rules={NAME_RULES}>
            <Input placeholder={NAME_PLACEHOLDER} />
          </Form.Item>

          <Form.Item name="email" label="Email" rules={EMAIL_RULES}>
            <Input placeholder={EMAIL_PLACEHOLDER} />
          </Form.Item>

          <Form.Item name="message" label="Message" rules={MESSAGE_RULES}>
            <Input.TextArea rows={5} placeholder={MESSAGE_PLACEHOLDER} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            {SUBMIT_BUTTON_TEXT}
          </Button>
        </Form>
      </Card>

      <Typography.Text type="secondary">{FOOTER_TEXT}</Typography.Text>
    </Space>
  );
};
