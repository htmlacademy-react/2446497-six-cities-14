import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/dispatch';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUser } from '../../store/authorization-data/selectors';
import { getFavorites } from '../../store/favorites-data/selectors';
import { updateFavorites } from '../../store/favorites-data/favorites-data';
import { setUser } from '../../store/authorization-data/authorization-data';

export default function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUser);
  const favoritesOffers = useAppSelector(getFavorites);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logoutAction());
    dispatch(updateFavorites([]));
    dispatch(setUser(null));
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
          {authorizationStatus === AuthorizationStatus.Auth && (
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                {userData && (
                  <li className='header__nav-item user'>
                    <div style={{ backgroundImage: `url(${userData.avatarUrl})`, borderRadius: '50%' }} className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <Link to={AppRoute.Favorites} className='header__nav-link header__nav-link--profile'>
                      <span className='header__user-name user__name'>{userData.email}</span>
                    </Link>
                    <span className='header__favorite-count'>{favoritesOffers.length}</span>
                  </li>
                )}
                <li className='header__nav-item'>
                  <span style={{ cursor: 'pointer' }} className='header__nav-link is-clickable' onClick={handleLogOut}>
                    <span className='header__signout'>Sign out</span>
                  </span>
                </li>
              </ul>
            </nav>
          )}
          {authorizationStatus === AuthorizationStatus.NoAuth && (
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item user'>
                  <Link to={AppRoute.Login} className='header__nav-link header__nav-link--profile'>
                    <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                    <span className='header__login'>Sign in</span>
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
