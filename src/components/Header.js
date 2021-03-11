import React from 'react';
import logo from '../assets/tom-lamb.svg';

const Header = () => (
  <>
    <header className="header">
      <nav className="header__container">
        <img className="header__img" src={logo} alt="Tom Lamb logo: Yellow initials in a dark coloured container" />
        <h1 className="header__title">Currencies</h1>
      </nav>
    </header>
  </>
);

export default Header;
