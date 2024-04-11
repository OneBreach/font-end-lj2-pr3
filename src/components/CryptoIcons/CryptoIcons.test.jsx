import { render, screen } from '@testing-library/react';
import CryptoIcons from './CryptoIcons';

describe('CryptoIcons', () => {
  it('renders all crypto icons', () => {
    render(<CryptoIcons />);

    const icons = screen.getAllByTestId('crypto-icon');
    expect(icons.length).toBe(8);
  });
});
