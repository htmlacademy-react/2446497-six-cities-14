import { Link } from 'react-router-dom';
import { OfferItem } from '../../types/offers';
import { capitalize, setStarsLength } from '../../utils/common';
import { store } from '../../store';
import { fetchOfferAction } from '../../store/api-actions';

import Bookmark from '../bookmark/bookmark';

type CardProps = {
  offer: OfferItem;
  offerCardType: 'mainScreen' | 'favoritesScreen' | 'offerScreen';
  onCardHover?: (offerId: OfferItem['id'] | null) => void;
};

export default function Card({ offer, offerCardType, onCardHover }: CardProps): JSX.Element {
  const options = {
    mainScreen: {
      className: 'cities',
      width: '260',
      height: '200',
    },
    favoritesScreen: {
      className: 'favorites',
      width: '150',
      height: '110',
    },
    offerScreen: {
      className: 'near-places',
      width: '260',
      height: '200',
    },
  };

  function handleMouseEnter() {
    if (offerCardType === 'mainScreen') {
      onCardHover?.(offer.id);
    }
  }
  function handleMouseLeave() {
    if (offerCardType === 'mainScreen') {
      onCardHover?.(null);
    }
  }

  return (
    <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={offer.id} className={`${options[offerCardType].className}__card place-card`}>
      {offer.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className={`${options[offerCardType].className}__image-wrapper place-card__image-wrapper`}>
        <Link
          to={`/offer/${offer.id}`}
          onClick={() => {
            store.dispatch(fetchOfferAction(offer.id));
          }}>
          <img className='place-card__image' src={`${offer.previewImage}`} width={`${options[offerCardType].width}`} height={`${options[offerCardType].height}`} alt='Place image' />
        </Link>
      </div>
      <div className={`${offerCardType === 'favoritesScreen' ? 'favorites__card-info' : ''} place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <Bookmark bookmarkType={'cardScreen'} offer={offer} />
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${setStarsLength(offer.rating)}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link
            to={`/offer/${offer.id}`}
            onClick={() => {
              store.dispatch(fetchOfferAction(offer.id));
            }}>
            {capitalize(offer.title)}
          </Link>
        </h2>
        <p className='place-card__type'>{capitalize(offer.type)}</p>
      </div>
    </article>
  );
}
