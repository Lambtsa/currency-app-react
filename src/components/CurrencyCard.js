import React, { useState } from 'react';
import heart from '../assets/heart.svg';
import heartLiked from '../assets/heart__liked.svg';

const CurrencyCard = ({ details }) => {
  const [like, setLike] = useState(false);

  const handleBtnClick = () => {
    setLike(!like);
    if (localStorage.likes) {
      const likes = JSON.parse(localStorage.likes)
        .filter(e => e.initials !== details.initials);
      localStorage.setItem('likes', JSON.stringify([...likes, {
        initials: details.initials,
        liked: !like,
      }]));
    } else {
      localStorage.setItem('likes', JSON.stringify([{
        initials: details.initials,
        liked: !like,
      }]));
    }
  };

  return (
    <>
      <article className={`article order-${like ? '1' : '2'}`}>
        <div className="article__details">
          <img className="article__img" src={`http://localhost:8080${details.logo}`} alt="" />
          <div className="article__content">
            <h2 className="article__title">{details.initials}</h2>
            <p className="article__subtitle">{details.name}</p>
          </div>
        </div>
        <div className="article__rates">
          <button className="article__btn" type="button" onClick={handleBtnClick}>
            <img className="article__like" src={like ? heartLiked : heart} alt={like ? 'Heart showing that currency is not liked' : 'Red heart showing currency is liked'} />
          </button>
          <p className="article__subtitle">{details.rate}</p>
        </div>
      </article>
    </>
  );
};

export default CurrencyCard;
