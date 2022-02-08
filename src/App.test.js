import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome! link', async () => {
  render(<App />);
  const linkElement = await screen.getByText(/Welcome!/i);
  expect(linkElement).toBeInTheDocument();
});
