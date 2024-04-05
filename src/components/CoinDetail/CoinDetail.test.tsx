
import CoinDetail from './CoinDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/user-event'; // Importeer de juiste bibliotheek voor ViteTest


describe('CoinDetail', () => {
  it('renders the CoinDetail component', async () => {
    // Gebruik act om de asynchrone rendering af te handelen
    await act(async () => {
      render(
        <Router>
          <Route path="/:id">
            <CoinDetail />
          </Route>
        </Router>
      );
    });

    // Verwacht dat de back-knop aanwezig is
    expect(screen.getByTestId('back-button')).toBeTruthy();

    // Wacht tot de gegevens zijn geladen en controleer of de tabel aanwezig is
    await screen.findByText(/Coin Name/i);
    expect(screen.getByText(/Coin Name/i)).toBeTruthy();
    expect(screen.getByText(/Prices \(USD\)/i)).toBeTruthy();
    expect(screen.getByText(/Volume %/i)).toBeTruthy();
    expect(screen.getByText(/Supply/i)).toBeTruthy();
    expect(screen.getByText(/Volume \(24H\)/i)).toBeTruthy();
    expect(screen.getByText(/VWap24Hr/i)).toBeTruthy();
  });
});
