import { render, screen } from '@testing-library/react';
import App from './App';

test('should have checkout as heading', () => {
  render(<App />);
  const linkElement = screen.getByText('Checkout');
  expect(linkElement).toBeInTheDocument();
});

test('should have shipping address as sub heading', () => {
  render(<App />);
  const linkElement = screen.getByText('Shipping Address');
  expect(linkElement).toBeInTheDocument();
});

test('should have text-center class',()=>{
  render(<App />);
  const id  = screen.getByTestId('heading');
  expect(id).toHaveClass('text-center')
})