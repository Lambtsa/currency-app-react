import { render, screen } from '@testing-library/react';
import App from './App';

describe('The App component', () => {
  test('renders a H1 with with the text Hello World!', () => {
    const { container } = render(<App />);
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')).toHaveTextContent('Hello World!')
  });
});
