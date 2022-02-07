import { render, screen } from '@testing-library/react';
import App from './App';

test('renders current link', () => {
  render(<App />);
  const linkElement = screen.getByText(/current/i);
  expect(linkElement).toBeInTheDocument();
});
