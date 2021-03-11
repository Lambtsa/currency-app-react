import React from 'react';
import logo from '../assets/tom-lamb.svg';
import SwitchToggle from './SwitchToggle/SwitchToggle';

const Header = () => (
  <>
    <header className="header">
      <nav className="header__container">
        <img className="header__img" src={logo} alt="Tom Lamb logo: Yellow initials in a dark coloured container" />
        <h1 className="header__title">Currencies</h1>
        <SwitchToggle />
      </nav>
    </header>
  </>
);

export default Header;
