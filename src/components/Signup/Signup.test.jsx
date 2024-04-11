import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/user-event';
import Signup from './Signup';

describe('Signup', () => {
  it('renders the Signup component', () => {
    render(<Signup />);
    
    expect(screen.getByPlaceholderText('Voer je e-mailadres in')).toBeTruthy();
    expect(screen.getByTestId('submit-btn')).toBeTruthy();
  });

  it('submits the form with valid email address', async () => {
    render(<Signup />);
    
    const emailInput = screen.getByPlaceholderText('Voer je e-mailadres in');
    const submitBtn = screen.getByTestId('submit-btn');

    await fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitBtn);

  });

  it('does not submit the form with invalid email address', async () => {
    render(<Signup />);
    
    const emailInput = screen.getByPlaceholderText('Voer je e-mailadres in');
    const submitBtn = screen.getByTestId('submit-btn');

    await fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.click(submitBtn);

  });
});
