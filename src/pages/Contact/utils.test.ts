import { sendContactMessage } from '../../api/emailjs';
import type { ContactForm } from './consts';
import { handleContactSubmit } from './utils';

jest.mock('../../api/emailjs', () => ({
  sendContactMessage: jest.fn().mockResolvedValue(undefined),
}));

describe('handleContactSubmit', () => {
  it('sends the contact message', async () => {
    const values: ContactForm = {
      fromName: 'Jane Doe',
      message: 'Hello there',
    };

    await handleContactSubmit(values);

    expect(sendContactMessage).toHaveBeenCalledWith(values);
  });
});
