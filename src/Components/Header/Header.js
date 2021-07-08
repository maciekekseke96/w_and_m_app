import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Formularz dodania depozytu</Link>
      <Link to="/depositsList">Lista depozytów</Link>
    </div>
  );
};

export default Header;
