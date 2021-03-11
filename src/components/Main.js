import React, { useEffect, useState } from 'react';
import CurrencyCard from './CurrencyCard';
import fetchData from '../helpers/fetchData';

const Main = () => {
  const [currencies, setCurrencies] = useState([]);
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    fetchData()
      .then(data => {
        setCurrencies(data.rates);
      })
      .catch(err => {
        /* eslint-disable-next-line */
        console.log(err)
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
          .catch(err => {
            /* eslint-disable-next-line */
            console.log(err)
          });
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <main>
        <section className="main__container">
          <p className="counter">{`${counter} minutes until refresh...`}</p>
          {currencies && currencies.map(el => <CurrencyCard key={el.name} details={el} />) }
        </section>
      </main>
    </>
  );
};

export default Main;
