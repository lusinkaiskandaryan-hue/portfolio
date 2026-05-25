import { useState } from 'react';
import { App, Button, Card, Form, Input, Space, Typography } from 'antd';

import { SectionTitle } from '../../components/SectionTitle';
import {
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
import {
  contactCardClassName,
  footerTextClassName,
  pageContainerClassName,
  submitButtonClassName,
} from './styles';
import { handleContactSubmit } from './utils';

type ContactFormValues = {

  fromName: string;

  message: string;

};


export const ContactPage = () => {
  const [form] = Form.useForm<ContactForm>();
  const { message } = App.useApp();

  const [loading, setLoading] = useState(false);

  const onFinish = async (values: ContactFormValues) => {

    setLoading(true);

    try {

      await handleContactSubmit(values);

      form.resetFields();

      message.success("Message sent.");

    } catch (error) {

      message.error(

        error instanceof Error ? error.message : "Could not send message.",

      );

    } finally {

      setLoading(false);

    }

  };


  return (
    <Space direction="vertical" size={24} className={pageContainerClassName}>
      <SectionTitle title={SECTION_TITLE} subtitle={SECTION_SUBTITLE} />

      <Card className={contactCardClassName}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="fromName" label="Name" rules={NAME_RULES}>
            <Input placeholder={NAME_PLACEHOLDER} />
          </Form.Item>

          <Form.Item name="message" label="Message" rules={MESSAGE_RULES}>
            <Input.TextArea rows={5} placeholder={MESSAGE_PLACEHOLDER} />
          </Form.Item>

          <Button type="primary" htmlType="submit" className={submitButtonClassName} loading={loading}>
            {SUBMIT_BUTTON_TEXT}
          </Button>
        </Form>
      </Card>

      <Typography.Text className={footerTextClassName}>{FOOTER_TEXT}</Typography.Text>
    </Space>
  );
};
