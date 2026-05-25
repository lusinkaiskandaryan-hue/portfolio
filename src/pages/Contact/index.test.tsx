import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from 'antd';
import {
  FOOTER_TEXT,
  MESSAGE_PLACEHOLDER,
  NAME_PLACEHOLDER,
  SECTION_SUBTITLE,
  SECTION_TITLE,
  SUBMIT_BUTTON_TEXT,
} from './consts';
import { ContactPage } from './index';

jest.mock('../../api/emailjs', () => ({
  sendContactMessage: jest.fn().mockResolvedValue(undefined),
}));

const renderContactPage = () =>
  render(
    <App>
      <ContactPage />
    </App>,
  );

describe('ContactPage', () => {
  it('renders the section title, form fields, and footer', () => {
    renderContactPage();

    expect(screen.getByRole('heading', { name: SECTION_TITLE })).toBeInTheDocument();
    expect(screen.getByText(SECTION_SUBTITLE)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(NAME_PLACEHOLDER)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(MESSAGE_PLACEHOLDER)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: SUBMIT_BUTTON_TEXT })).toBeInTheDocument();
    expect(screen.getByText(FOOTER_TEXT)).toBeInTheDocument();
  });

  it('shows validation errors when the form is submitted empty', async () => {
    const user = userEvent.setup();
    renderContactPage();

    await user.click(screen.getByRole('button', { name: SUBMIT_BUTTON_TEXT }));

    expect(await screen.findByText('Please input your name.')).toBeInTheDocument();
    expect(screen.getByText('Please write a short message.')).toBeInTheDocument();
  });

  it('submits valid input and clears the form', async () => {
    const user = userEvent.setup();
    renderContactPage();

    await user.type(screen.getByPlaceholderText(NAME_PLACEHOLDER), 'Jane Doe');
    await user.type(screen.getByPlaceholderText(MESSAGE_PLACEHOLDER), 'Hello there');
    await user.click(screen.getByRole('button', { name: SUBMIT_BUTTON_TEXT }));

    await waitFor(() => {
      expect(screen.getByPlaceholderText(NAME_PLACEHOLDER)).toHaveValue('');
      expect(screen.getByPlaceholderText(MESSAGE_PLACEHOLDER)).toHaveValue('');
    });
  });
});
