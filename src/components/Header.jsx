import React from 'react';
import './style.css';
import netflixLogo from './images/logo.png';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#"><img src={netflixLogo} alt="Netflix Logo" /></a>
        <div className="language-selector">
          {}
        </div>
        <a href="#">Sign In</a>
      </nav>
    </header>
  );
};

export default Header;