import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without throwing', () => {
  expect(() => {
    render(<App />);
  }).not.toThrow();
});

test('renders terminal title text', () => {
  render(<App />);
  // The text should appear twice - once in header and once in prompt
  const titleElements = screen.getAllByText('Eon@fractal-terminal:~$');
  expect(titleElements.length).toBe(2);
});

test('has terminal structure with classes', () => {
  const { container } = render(<App />);
  // Check for terminal container
  expect(container.querySelector('.terminal')).toBeInTheDocument();
  // Check for header
  expect(container.querySelector('.terminal-header')).toBeInTheDocument();
  // Check for content area
  expect(container.querySelector('.terminal-content')).toBeInTheDocument();
  // Check for prompt
  expect(container.querySelector('.terminal-prompt')).toBeInTheDocument();
});