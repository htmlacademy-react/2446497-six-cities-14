import { Link } from 'react-router-dom';
import { OfferItem } from '../../types/question';
import { useEffect, useState } from 'react';

type CardProps = {
  offer: OfferItem;
};

export default function Card({ offer }: CardProps): JSX.Element {
  const [width, setWidth] = useState(80);
  const [active, setActive] = useState(0);
  console.log(active);

  function handleWidth() {
    const rating = Math.round(offer.rating);
    if (rating >= 5) {
      setWidth(100);
    } else if (rating < 5 && rating >= 4) {
      setWidth(80);
    } else if (rating < 4 && rating >= 3) {
      setWidth(60);
    } else if (rating < 3 && rating >= 2) {
      setWidth(40);
    } else if (rating < 2 && rating >= 1) {
      setWidth(20);
    } else {
      setWidth(0);
    }
  }

  useEffect(() => {
    handleWidth();
  }, []);

  return (
    <article key={offer.id} onMouseEnter={() => setActive(offer.id)} className='cities__card place-card'>
      {offer.premium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${offer.id}`}>
          <img className='place-card__image' src={`${offer.images[0]}`} style={{ width: '260', height: '200' }} alt='Place image' />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={offer.favorites ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type='button'>
            <svg className='place-card__bookmark-icon' style={{ width: '18', height: '19' }}>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${width}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${offer.id}`}>{offer.name}</Link>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
}
