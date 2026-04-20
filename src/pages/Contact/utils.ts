import type { FormInstance } from 'antd';
import type { ContactForm } from './consts';

export const handleContactSubmit = (values: ContactForm, form: FormInstance<ContactForm>): void => {
  // Placeholder submission handler; connect to backend/email service later.
  console.log('Contact form payload:', values);
  form.resetFields();
};
