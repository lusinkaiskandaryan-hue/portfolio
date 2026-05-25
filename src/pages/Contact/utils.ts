import type { ContactForm } from './consts';
import { sendContactMessage } from '../../api/emailJS';

export const handleContactSubmit = (values: ContactForm): void => {
 sendContactMessage(values);
};

