import { render, screen } from '@testing-library/react';
import BottomHeader from './BottomHeader';

describe('BottomHeader', () => {
  it('renders all buttons', () => {
    render(<BottomHeader />);

    const buttons = screen.getAllByRole('link'); 
    expect(buttons.length).toBe(10); 

    buttons.forEach((button, index) => {
      const buttonText = button.textContent;
      expect(buttonText).toBe(
        ['Exchanges', 'Community', 'Products', 'Learn', 'NFTs', 'Wallet', 'News', 'Staking', 'Tokenomics', 'Blockchain-technologie'][index]
      );

    });
  });
});
