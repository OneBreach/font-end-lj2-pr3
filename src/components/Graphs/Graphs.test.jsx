import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Graphs from './Graphs';
import PieChart from './PieChart';

// Mocking the localStorage getItem and setItem methods
beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
    },
    writable: true,
  });
});

test('renders Graphs component with correct data', () => {
  const coins = [
    {
      id: 1,
      name: 'Bitcoin',
      volumeUsd24Hr: '1000000',
      priceUsd: '60000',
      changePercent24Hr: '5',
      rank: 1,
    },
    {
      id: 2,
      name: 'Ethereum',
      volumeUsd24Hr: '500000',
      priceUsd: '2000',
      changePercent24Hr: '-3',
      rank: 2,
    },
  ];

  render(<Graphs coins={coins} onSearch={() => {}} />);

  // Check if the PieChart is rendered
  const pieChartElement = screen.getByRole('figure', { name: 'Pie Chart' });
  expect(pieChartElement).toBeInTheDocument();

  // Check if the table data is rendered correctly
  expect(screen.getByText('Bitcoin')).toBeInTheDocument();
  expect(screen.getByText('$60000')).toBeInTheDocument();
  expect(screen.getByText('5%')).toBeInTheDocument();
  expect(screen.getByText('Ethereum')).toBeInTheDocument();
  expect(screen.getByText('$2000')).toBeInTheDocument();
  expect(screen.getByText('-3%')).toBeInTheDocument();
});

test('adds and removes coins from favorites correctly', () => {
  const coins = [
    {
      id: 1,
      name: 'Bitcoin',
      volumeUsd24Hr: '1000000',
      priceUsd: '60000',
      changePercent24Hr: '5',
      rank: 1,
    },
  ];

  render(<Graphs coins={coins} onSearch={() => {}} />);

  // Add a coin to favorites
  const addToFavoritesButton = screen.getByTestId('favorite-heart-icon');
  userEvent.click(addToFavoritesButton);

  // Check if the coin is added to favorites
  expect(screen.getByText('Favorites')).toBeInTheDocument();
  expect(screen.getByText('Bitcoin')).toBeInTheDocument();

  // Remove the coin from favorites
  const removeFromFavoritesButton = screen.getByTestId('favorite-delete-icon');
  userEvent.click(removeFromFavoritesButton);

  // Check if the coin is removed from favorites
  expect(screen.queryByText('Favorites')).not.toBeInTheDocument();
  expect(screen.queryByText('Bitcoin')).not.toBeInTheDocument();
});
