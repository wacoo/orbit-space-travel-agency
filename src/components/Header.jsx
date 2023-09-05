import './Header.css';
import Logo from '../img/logo.png';

const Header = () => (
  <header className="header" >
    <div className="logo-title">
      <img src={Logo} alt="Logo" />
      <h1>rbit Space Travelers&apos; Hub</h1>
    </div>
  </header>
);

export default Header;
