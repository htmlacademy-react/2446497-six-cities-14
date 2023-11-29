import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { OfferItem } from '../../types/offers';
import { useAppSelector } from '../../hooks/dispatch';
import { getAuthorizationStatus } from '../../store/authorization-data/selectors';
import { store } from '../../store';
import { deleteFavoriteAction, postFavoriteAction } from '../../store/api-actions';
import { useDispatch } from 'react-redux';
import { updateOffers } from '../../store/offers-data/offers-data';
import { updateOffer } from '../../store/offer-data/offer-data';

type BookmarkProps = {
  offer: OfferItem;
  bookmarkType: 'offerScreen' | 'cardScreen';
  offerId?: OfferItem['id'];
};

function Bookmark({ offer, bookmarkType }: BookmarkProps) {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const options = {
    offerScreen: {
      className: 'offer',
      width: '31',
      height: '33',
    },
    cardScreen: {
      className: 'place-card',
      width: '18',
      height: '19',
    },
  };

  const handleBookmarkClick = async (favoriteOffer: OfferItem) => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigateTo(AppRoute.Login);
      return;
    }
    const { isFavorite } = favoriteOffer;
    const { payload } = isFavorite ? await store.dispatch(deleteFavoriteAction(favoriteOffer)) : await store.dispatch(postFavoriteAction(favoriteOffer));

    if (bookmarkType === 'cardScreen') {
      dispatch(updateOffers(payload as OfferItem));
    } else if (bookmarkType === 'offerScreen') {
      dispatch(updateOffer(payload as OfferItem));
    }
  };

  return (
    <button
      type='button'
      onClick={() => {
        handleBookmarkClick(offer);
      }}
      className={`${options[bookmarkType].className}__bookmark-button button ${offer.isFavorite ? `${options[bookmarkType].className}__bookmark-button--active` : ''}`}>
      <svg className={`${options[bookmarkType].className}__bookmark-icon`} width={`${options[bookmarkType].width}`} height={`${options[bookmarkType].height}`}>
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      <span className='visually-hidden'>To bookmarks</span>
    </button>
  );
}

export default Bookmark;
