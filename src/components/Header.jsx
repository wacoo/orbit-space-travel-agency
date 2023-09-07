import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../img/logo.png';

const Header = () => (
  <header className="header">
    <div className="logo-title">
      <img src={Logo} alt="Logo" />
      <h1>rbit Space Travelers&apos; Hub</h1>
    </div>
    <ul>
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
