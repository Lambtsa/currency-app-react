const server = process.env.NODE_ENV === 'production'
  ? 'https://currency-app-api.herokuapp.com/currencies'
  : 'http://localhost:8080/currencies';

const fetchData = () => fetch(server)
  .then(response => response.json());

export default fetchData;
