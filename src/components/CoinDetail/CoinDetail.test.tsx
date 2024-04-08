
import CoinDetail from './CoinDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/user-event'; 


describe('CoinDetail', () => {
  it('renders the CoinDetail component', async () => {
    await act(async () => {
      render(
        <Router>
          <Route path="/:id">
            <CoinDetail />
          </Route>
        </Router>
      );
    });

    expect(screen.getByTestId('back-button')).toBeTruthy();

    await screen.findByText(/Coin Name/i);
    expect(screen.getByText(/Coin Name/i)).toBeTruthy();
    expect(screen.getByText(/Prices \(USD\)/i)).toBeTruthy();
    expect(screen.getByText(/Volume %/i)).toBeTruthy();
    expect(screen.getByText(/Supply/i)).toBeTruthy();
    expect(screen.getByText(/Volume \(24H\)/i)).toBeTruthy();
    expect(screen.getByText(/VWap24Hr/i)).toBeTruthy();
  });
});
