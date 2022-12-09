import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header({ headerLink }) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Mesto Russia" className="header__logo" />
      <Link to={headerLink.link} className="header__link">{headerLink.title}</Link>
    </header>
  )
}

export default Header; 