import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../helpers/ThemeProvider';

const serverAddress = process.env.NODE_ENV === 'production'
  ? 'https://currency-app-api.herokuapp.com/addEmail'
  : 'http://localhost:8080/addEmail';

/* eslint-disable-next-line */
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EmailForm = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailChange = e => {
    setEmail(e.target.value);
    setError(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setEmailSent(false);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [emailSent]);

  const handleFormSubmit = e => {
    e.preventDefault();
    if (regex.test(email) === false) {
      setError(true);
      setEmailSent(false);
    } else {
      setError(false);
      fetch(serverAddress, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then(() => {
          setEmailSent(true);
          setEmail('');
        })
        .catch(() => {
          setError(true);
          setEmailSent(false);
        });
    }
  };

  return (
    <section className={`form__container ${theme}`}>
      {error && <p className="form__errorMessage">Please enter a valid email address.</p>}
      {emailSent && <p className="form__validMessage">{`Congrats ${email} registered!`}</p>}
      <form className="form" onSubmit={handleFormSubmit}>
        <h3>Receive updates by Email</h3>
        <input className="form__input" type="text" onChange={handleEmailChange} value={email} placeholder="Enter your email" />
        <button className="form__btn" type="submit">Register</button>
      </form>
    </section>
  );
};

export default EmailForm;
