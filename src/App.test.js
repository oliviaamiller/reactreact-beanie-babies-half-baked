import { render, screen } from '@testing-library/react';
import App from './App';

test('renders current page link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/current page/i);
  expect(linkElement).toBeInTheDocument();
});
