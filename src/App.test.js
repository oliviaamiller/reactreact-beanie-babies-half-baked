import { render, screen } from '@testing-library/react';
import App from './App';

test('renders current link', async () => {
  render(<App />);
  const linkElement = await screen.getByText(/current/i);
  expect(linkElement).toBeInTheDocument();
});
