import { Link, useHistory } from 'react-router-dom';
import logo from '../logo.svg';

function Header({ headerLink, email, loggedIn, setLoggedIn }) {
  const history = useHistory();
  function signOut() {
    localStorage.removeItem('jwt');
    history.push('/sign-in');
    setLoggedIn(false);
  }

  return (
    <header className="header">
      <img src={logo} alt="Логотип Mesto Russia" className="header__logo" />
      {loggedIn ? (
        <div className='header__signout'>
          <p className="header__email">{email}</p>
          <button onClick={signOut} className='header__signout-button buttons'>Выйти</button>
        </div>
      ) : (
        <Link to={headerLink.link} className="header__link">{headerLink.title}</Link>
      )}
    </header>
  )
}

export default Header; 