import { render, screen, cleanup } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import Header from './components/Header';
import Main from './components/Main';
import CurrencyCard from './components/CurrencyCard';
import Footer from './components/Footer';

const mockData = {
  baseCurrency: 'EUR',
  rates: [
    {
      name: 'BCH',
      rate: 4,
    },
    {
      name: 'BTC',
      rate: 4,
    },
  ]
}

const server = setupServer(
  rest.get('http://localhost:8080/currencies', (req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

/*
  Tests
*/

describe('The Header component', () => {
  test('renders a header with a logo and a heading', () => {
    render(<App />);
    const header = screen.getByRole('banner');
    const title = header.querySelector('h1');
    expect(header).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
  test('renders a header with my logo and specific title', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    const title = header.querySelector('h1');
    const img = screen.getByRole('img')
    expect(header).toBeInTheDocument();
    expect(title).toHaveTextContent('Currencies');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Tom Lamb logo: Yellow initials in a dark coloured container');
    expect(img).toHaveAttribute('src', 'tom-lamb.svg');
  });
});

// describe('The Main component', () => {
//   test('renders a main wrapper for the inner components', async() => {
//     render(<Main />);
//     const main = screen.getByRole('main');
//     const articles = await screen.findAllByRole('article');
//     expect(main).toBeInTheDocument();
//     expect(articles)
//   })
// });

describe('The CurrencyCard component', () => {
  test('renders a card with with an img a currency name and a subtitle', () => {
    const mockCardDetails = {
      initials: 'AUD',
      name: 'Australian Dollar',
      rate: 3,
      logo: '/assets/flags/aud.webp',
    }
    render(<CurrencyCard details={mockCardDetails}/>);
    const article = screen.getByRole('article');
    const imgs = screen.getAllByRole('img');
    const title = screen.getByRole('heading');
    expect(article).toBeInTheDocument();
    expect(imgs).toHaveLength(2);
    expect(title).toBeInTheDocument();
  });
})

describe('The footer component', () => {
  test('should render a footer', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent('© 2021 Tom Lamb. All rights reserved.');
  })
})
