import { Button, Card, Form, Input, Space, Typography } from 'antd';
import { SectionTitle } from '../components/SectionTitle';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export function ContactPage() {
  const [form] = Form.useForm<ContactForm>();

  const onSubmit = (values: ContactForm) => {
    // Placeholder submission handler; connect to backend/email service later.
    // eslint-disable-next-line no-console
    console.log('Contact form payload:', values);
    form.resetFields();
  };

  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <SectionTitle title="Contact" subtitle="Let us discuss your next project." />

      <Card>
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input your name.' }]}>
            <Input placeholder="Your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input your email.' },
              { type: 'email', message: 'Please enter a valid email.' },
            ]}
          >
            <Input placeholder="you@email.com" />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please write a short message.' }]}
          >
            <Input.TextArea rows={5} placeholder="Tell me about your project..." />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Send message
          </Button>
        </Form>
      </Card>

      <Typography.Text type="secondary">
        You can also add links to Telegram, LinkedIn, Upwork, or your preferred contact channel.
      </Typography.Text>
    </Space>
  );
}
