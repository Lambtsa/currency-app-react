import React from 'react';

const CurrencyCard = ({ details }) => (
  <>
    <article className="article">
      <img className="article__img" src="" alt="" />
      <div className="article__details">
        <h2 className="article__title">{details.name}</h2>
        <p className="article__subtitle">{details.rate}</p>
      </div>
    </article>
  </>
);

export default CurrencyCard;
