import React, { useEffect, useState, useContext } from 'react';
import CurrencyCard from './CurrencyCard';
import fetchData from '../helpers/fetchData';
import { ThemeContext } from '../helpers/ThemeProvider';
import EmailForm from './EmailForm';

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const [currencies, setCurrencies] = useState([]);
  const [counter, setCounter] = useState(60);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData()
      .then(data => {
        setCurrencies(data.rates);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter > 1) {
        setCounter(counter - 1);
      } else {
        setCounter(60);
        fetchData()
          .then(data => {
            setCurrencies(data.rates);
          })
          .catch(() => {
            setError(true);
          });
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <main className={`main ${theme}`}>
        <section className="main__container">
          <EmailForm />
          <p className={`counter ${theme}`}>{`${counter} seconds until refresh...`}</p>
          {currencies && currencies
            .map(el => <CurrencyCard key={el.name} details={el} />) }
          {error && <p className="error__message">There has been an error. Please try again.</p>}
        </section>
      </main>
    </>
  );
};

export default Main;
