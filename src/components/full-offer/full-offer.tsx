import { Fragment } from 'react';
import Bookmark from '../bookmark/bookmark';
import { addEnding, capitalize, starsLength } from '../../utils/common';
import { OfferItem } from '../../types/offers';

type FullOfferProps = {
  offer: OfferItem;
};

export default function FullOffer({ offer }: FullOfferProps): JSX.Element {
  const host = offer.host;

  return (
    <Fragment>
      {offer.isPremium && (
        <div className='offer__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='offer__name-wrapper'>
        <h1 className='offer__name'>{capitalize(offer.title)}</h1>
        <Bookmark offer={offer} bookmarkType={'offerScreen'} />
      </div>
      <div className='offer__rating rating'>
        <div className='offer__stars rating__stars'>
          <span style={{ width: `${starsLength(offer.rating)}%` }}></span>
          <span className='visually-hidden'>Rating</span>
        </div>
        <span className='offer__rating-value rating__value'>{offer.rating}</span>
      </div>
      <ul className='offer__features'>
        <li className='offer__feature offer__feature--entire'>{offer.type}</li>
        <li className='offer__feature offer__feature--bedrooms'>
          {offer.bedrooms} Bedroom{addEnding(offer.bedrooms)}
        </li>
        <li className='offer__feature offer__feature--adults'>
          Max {offer.maxAdults} adult{addEnding(offer.maxAdults)}
        </li>
      </ul>
      <div className='offer__price'>
        <b className='offer__price-value'>&euro;{offer.price}</b>
        <span className='offer__price-text'>&nbsp;night</span>
      </div>
      <div className='offer__inside'>
        <h2 className='offer__inside-title'>What&apos;s inside</h2>
        <ul className='offer__inside-list'>
          {offer.goods.map((feature: string) => (
            <li key={feature} className='offer__inside-item'>
              {capitalize(feature)}
            </li>
          ))}
        </ul>
      </div>
      <div className='offer__host'>
        <h2 className='offer__host-title'>Meet the host</h2>
        <div className='offer__host-user user'>
          <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
            <img className='offer__avatar user__avatar' src={`${host.avatarUrl}`} width='74' height='74' alt='Host avatar' />
          </div>
          <span className='offer__user-name'>{host.name}</span>
          <span className='offer__user-status'>{host.isPro}</span>
        </div>
        <div className='offer__description'>
          <p className='offer__text'>{offer.description}</p>
        </div>
      </div>
    </Fragment>
  );
}
