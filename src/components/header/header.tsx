import { Link, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Fragment, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/dispatch';
import { logoutAction } from '../../store/api-actions';
import { store } from '../../store';
import { getAuthorizationStatus } from '../../store/authorization-data/selectors';
import { getFavorites } from '../../store/favorites-data/selectors';

export default function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [page, setPage] = useState<string | undefined>('');
  const params = useLocation();
  const location = params.pathname;
  const login: string = AppRoute.Login;
  const favoritesOffers = useAppSelector(getFavorites);

  useEffect(() => {
    function handleHeader() {
      if (location === login) {
        setPage('login');
      } else {
        setPage('');
      }
    }
    handleHeader();
  }, [location, login]);

  const logOut = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      store.dispatch(logoutAction());
    }
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link to={AppRoute.Main} className='header__logo-link header__logo-link--active'>
              <img src='img/logo.svg' className='header__logo' alt='6 cities logo' style={{ width: '81', height: '41' }} />
            </Link>
          </div>
          {page === '' && (
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <Link to={authorizationStatus === AuthorizationStatus.Auth ? AppRoute.Favorites : '#'} className='header__nav-link header__nav-link--profile'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    {authorizationStatus === AuthorizationStatus.Auth && (
                      <Fragment>
                        <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                        <span className='header__favorite-count'>{favoritesOffers.length}</span>
                      </Fragment>
                    )}
                  </Link>
                </li>
                <li className='header__nav-item'>
                  <Link to={AppRoute.Login} onClick={logOut} className='header__nav-link'>
                    <span className='header__signout'>{authorizationStatus === AuthorizationStatus.Auth ? 'Log out' : 'Log in'}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
