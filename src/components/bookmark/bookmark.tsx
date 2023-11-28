import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { AppRoute, AuthorizationStatus } from '../../const';
import { OfferItem } from '../../types/offers';
import { useAppSelector } from '../../hooks/dispatch';
import { getAuthorizationStatus } from '../../store/authorization-data/selectors';
import { store } from '../../store';
import { deleteFavoriteAction, postFavoriteAction } from '../../store/api-actions';

type BookmarkProps = {
  id: OfferItem['id'];
  isFavorite: OfferItem['isFavorite'] | undefined;
  bookmarkType: 'offerScreen' | 'cardScreen';
  onBookmarkClick: () => void;
};

function Bookmark({ id, isFavorite, onBookmarkClick, bookmarkType }: BookmarkProps) {
  const navigateTo = useNavigate();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const options = {
    offerScreen: {
      width: '31',
      height: '33',
    },
    cardScreen: {
      width: '18',
      height: '19',
    },
  };

  //   function updateFavorites() {
  //     store.dispatch(fetchOffersAction());
  //   }

  const handleBookmarkClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigateTo(AppRoute.Login);
    }

    onBookmarkClick();

    if (isFavorite) {
      store.dispatch(deleteFavoriteAction(id));
    } else {
      store.dispatch(postFavoriteAction(id));
    }
    // updateFavorites();
  };

  return (
    <button
      type='button'
      onClick={handleBookmarkClick}
      className={classNames({
        'place-card__bookmark-button button': true,
        'place-card__bookmark-button--active': isFavorite,
      })}>
      <svg className='place-card__bookmark-icon' width={`${options[bookmarkType].width}`} height={`${options[bookmarkType].height}`}>
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      <span className='visually-hidden'>To bookmarks</span>
    </button>
  );
}

export default Bookmark;
