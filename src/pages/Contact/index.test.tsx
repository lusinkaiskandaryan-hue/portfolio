import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  EMAIL_PLACEHOLDER,
  FOOTER_TEXT,
  MESSAGE_PLACEHOLDER,
  NAME_PLACEHOLDER,
  SECTION_SUBTITLE,
  SECTION_TITLE,
  SUBMIT_BUTTON_TEXT,
} from './consts';
import { ContactPage } from './index';

describe('ContactPage', () => {
  it('renders the section title, form fields, and footer', () => {
    render(<ContactPage />);

    expect(screen.getByRole('heading', { name: SECTION_TITLE })).toBeInTheDocument();
    expect(screen.getByText(SECTION_SUBTITLE)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(NAME_PLACEHOLDER)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(EMAIL_PLACEHOLDER)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(MESSAGE_PLACEHOLDER)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: SUBMIT_BUTTON_TEXT })).toBeInTheDocument();
    expect(screen.getByText(FOOTER_TEXT)).toBeInTheDocument();
  });

  it('shows validation errors when the form is submitted empty', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    await user.click(screen.getByRole('button', { name: SUBMIT_BUTTON_TEXT }));

    expect(await screen.findByText('Please input your name.')).toBeInTheDocument();
    expect(screen.getByText('Please input your email.')).toBeInTheDocument();
    expect(screen.getByText('Please write a short message.')).toBeInTheDocument();
  });

  it('shows an error for an invalid email', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    await user.type(screen.getByPlaceholderText(NAME_PLACEHOLDER), 'Jane Doe');
    await user.type(screen.getByPlaceholderText(EMAIL_PLACEHOLDER), 'not-an-email');
    await user.type(screen.getByPlaceholderText(MESSAGE_PLACEHOLDER), 'Hello');
    await user.click(screen.getByRole('button', { name: SUBMIT_BUTTON_TEXT }));

    expect(await screen.findByText('Please enter a valid email.')).toBeInTheDocument();
  });

  it('submits valid input, logs the payload, and clears the form', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const user = userEvent.setup();
    render(<ContactPage />);

    await user.type(screen.getByPlaceholderText(NAME_PLACEHOLDER), 'Jane Doe');
    await user.type(screen.getByPlaceholderText(EMAIL_PLACEHOLDER), 'jane@example.com');
    await user.type(screen.getByPlaceholderText(MESSAGE_PLACEHOLDER), 'Hello there');
    await user.click(screen.getByRole('button', { name: SUBMIT_BUTTON_TEXT }));

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Contact form payload:', {
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'Hello there',
      });
    });

    await waitFor(() => {
      expect(screen.getByPlaceholderText(NAME_PLACEHOLDER)).toHaveValue('');
      expect(screen.getByPlaceholderText(EMAIL_PLACEHOLDER)).toHaveValue('');
      expect(screen.getByPlaceholderText(MESSAGE_PLACEHOLDER)).toHaveValue('');
    });

    consoleSpy.mockRestore();
  });
});
