import type { ContactForm } from './consts';
import { sendContactMessage } from '../../api/emailjs';

export const handleContactSubmit = (values: ContactForm): Promise<void> =>
  sendContactMessage(values);

