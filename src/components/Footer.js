import React, { useContext } from 'react';
import { ThemeContext } from '../helpers/ThemeProvider';
import githubDark from '../assets/github-dark.svg';
import githubLight from '../assets/github-light.svg';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <footer className={`footer ${theme}`}>
        <a href="https://github.com/Lambtsa/currency-app-react" rel="noreferrer" target="_blank">
          <img className="footer__img" src={theme === 'dark' ? githubLight : githubDark} alt={`Github logo ${theme}`} />
        </a>
      </footer>
    </>
  );
};

export default Footer;
