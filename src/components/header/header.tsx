import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link to='/' className='header__logo-link header__logo-link--active'>
              <img src='img/logo.svg' className='header__logo' alt='6 cities logo' style={{ width: '81', height: '41' }} />
            </Link>
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-item user'>
                <Link to='/favorites' className='header__nav-link header__nav-link--profile'>
                  <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                  <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                  <span className='header__favorite-count'>3</span>
                </Link>
              </li>
              <li className='header__nav-item'>
                <Link to='/login' className='header__nav-link'>
                  <span className='header__signout'>Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
