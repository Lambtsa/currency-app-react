import React, { useContext } from 'react';
import { ThemeContext } from '../helpers/ThemeProvider';

const path = process.env.NODE_ENV === 'production'
  ? 'https://currency-app-api.herokuapp.com/'
  : 'http://localhost:8080';

const CurrencyCard = ({ details }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <article className={`article ${theme}`}>
        <div className="article__details">
          <img className="article__img" src={`${path}${details.logo}`} alt="" />
          <div className="article__content">
            <h2 className="article__title">{details.initials}</h2>
            <p className="article__subtitle">{details.name}</p>
          </div>
        </div>
        <div className="article__rates">
          <p className="article__rate">{`1 EUR = ${details.rate} ${details.initials} `}</p>
          <p className={`article__subtitle ${details.rateDelta > 0 ? 'positive' : 'negative'}`}>
            {details.rateDelta > 0 ? `+${details.rateDelta * 100}%` : `${details.rateDelta * 100}%` }
          </p>
        </div>
      </article>
    </>
  );
};

export default CurrencyCard;
