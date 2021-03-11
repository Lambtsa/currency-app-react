const fetchData = () => fetch('http://localhost:8080/currencies')
  .then(response => response.json());

export default fetchData;
