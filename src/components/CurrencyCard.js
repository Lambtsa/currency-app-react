import React from 'react';

const CurrencyCard = ({ details }) => (
  <>
    <article className="article">
      <div className="article__details">
        <img className="article__img" src={`http://localhost:8080${details.logo}`} alt="" />
        <div className="article__content">
          <h2 className="article__title">{details.initials}</h2>
          <p className="article__subtitle">{details.name}</p>
        </div>
      </div>
      <div className="article__rates">
        <p className="article__subtitle">{details.rate}</p>
      </div>
    </article>
  </>
);

export default CurrencyCard;
