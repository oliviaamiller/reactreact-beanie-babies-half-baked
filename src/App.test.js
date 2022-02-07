import { render, screen } from '@testing-library/react';
import App from './App';

test('renders current page link', () => {
  render(<App />);
  const linkElement = screen.findByText(/current page/i);
  expect(linkElement).toBeInTheDocument();
});
