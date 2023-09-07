import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import './Header.css';

function Header() {
  return (
    <nav className="header-nav">
      <div className="logo-container">
        <img className="site-logo" src={logo} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="nav-items">
        <li>
          <NavLink to="/" className="nav-link">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions" className="icon nav-link">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-link">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
