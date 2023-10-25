import { Link, useLocation } from 'react-router-dom';
import { OfferItem } from '../../types/question';
import { useEffect, useState } from 'react';
import { AppRoute } from '../../const';

type CardProps = {
  offer: OfferItem;
};

export default function Card({ offer }: CardProps): JSX.Element {
  const [width, setWidth] = useState(80);
  const [active, setActive] = useState(0);
  const params = useLocation();
  const [page, setPage] = useState('main');

  console.log(params);
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

  function handlePage() {
    const page = params.pathname;
    if (page === AppRoute.Main) {
      setPage('cities');
    } else if (page === AppRoute.Favorites) {
      setPage('favorites');
    } else if (page === AppRoute.Offer) {
      setPage('near-places');
    }
  }

  useEffect(() => {
    handleWidth();
    handlePage();
  }, [page]);

  return (
    <article key={offer.id} onMouseEnter={() => setActive(offer.id)} className={`${page}__card place-card`}>
      {offer.premium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className={`${page}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className='place-card__image' src={`${offer.images[0]}`} style={page === ('cities' || 'near-places') ? { width: '260px', height: '200px' } : { width: '150px', height: '110px' }} alt='Place image' />
        </Link>
      </div>
      <div className={`${page === 'favorites' ? 'favorites__card-info' : ''} place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.favorites ? 'place-card__bookmark-button--active' : ''} button`} type='button'>
            <svg className='place-card__bookmark-icon' style={{ width: '18px', height: '19px' }}>
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
