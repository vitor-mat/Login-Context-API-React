import { render, screen } from '@testing-library/react';
import App from './App';

/*
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
*/

const Button = () => {
  return(
    <button>Texto</button>
  )
}

test("Testando butão exemplo", () => {
  const { getByText } = render(<Button />);
  const btnElement = getByText('Text');
  expect(btnElement).toBeInTheDocument();
})