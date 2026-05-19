import type { FormInstance } from 'antd';
import type { ContactForm } from './consts';
import { handleContactSubmit } from './utils';

describe('handleContactSubmit', () => {
  it('logs the payload and resets the form', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const resetFields = jest.fn();
    const form = { resetFields } as unknown as FormInstance<ContactForm>;
    const values: ContactForm = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello there',
    };

    handleContactSubmit(values, form);

    expect(consoleSpy).toHaveBeenCalledWith('Contact form payload:', values);
    expect(resetFields).toHaveBeenCalledTimes(1);

    consoleSpy.mockRestore();
  });
});
