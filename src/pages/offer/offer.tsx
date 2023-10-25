import { Helmet } from 'react-helmet-async';
import { Offers } from '../../types/question';
import { useParams } from 'react-router-dom';
import Error from '../404/404';
import { useEffect, useState } from 'react';
import Card from '../../components/card/card';
import FormReview from '../../components/formReview/form-review';

type OfferProps = {
  offers: Offers;
};

export default function Offer({ offers }: OfferProps): JSX.Element {
  const params = useParams().id;
  let paramsNum: number = 0;

  if (params !== undefined) {
    paramsNum = parseInt(params);
  }
  const offer = offers.find((offer) => {
    return offer.id === paramsNum;
  });
  if (offer === undefined) {
    return <Error />;
  }
  const [width, setWidth] = useState(80);
  const rating = Math.round(offer.rating);
  const host = offer.host[0];

  function handleWidth() {
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
    <div className='page'>
      <Helmet>
        <title>Ваш вариант</title>
      </Helmet>

      <main className='page__main page__main--offer'>
        <section className='offer'>
          <div className='offer__gallery-container container'>
            <div className='offer__gallery'>
              {offer.images.map((img, id) => {
                return (
                  <div key={id} className='offer__image-wrapper'>
                    <img className='offer__image' src={`${img}`} alt='Photo studio' />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='offer__container container'>
            <div className='offer__wrapper'>
              {offer.premium && (
                <div className='offer__mark'>
                  <span>Premium</span>
                </div>
              )}
              <div className='offer__name-wrapper'>
                <h1 className='offer__name'>{offer.name}</h1>
                <button className={`offer-card__bookmark-button ${offer.favorites ? 'offer-card__bookmark-button--active' : ''} button`} type='button'>
                  <svg className='offer__bookmark-icon' style={{ width: '31px', height: '33px' }}>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='offer__rating rating'>
                <div className='offer__stars rating__stars'>
                  <span style={{ width: `${width}%` }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='offer__rating-value rating__value'>{offer.rating}</span>
              </div>
              <ul className='offer__features'>
                <li className='offer__feature offer__feature--entire'>{offer.type}</li>
                <li className='offer__feature offer__feature--bedrooms'>{offer.bedrooms} Bedrooms</li>
                <li className='offer__feature offer__feature--adults'>Max {offer.adults} adults</li>
              </ul>
              <div className='offer__price'>
                <b className='offer__price-value'>&euro;{offer.price}</b>
                <span className='offer__price-text'>&nbsp;night</span>
              </div>
              <div className='offer__inside'>
                <h2 className='offer__inside-title'>What&apos;s inside</h2>
                <ul className='offer__inside-list'>
                  {offer.inside.map((feature, id) => {
                    return (
                      <li key={id} className='offer__inside-item'>
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='offer__host'>
                <h2 className='offer__host-title'>Meet the host</h2>
                <div className='offer__host-user user'>
                  <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
                    <img className='offer__avatar user__avatar' src={`${host.avatar}`} width='74' height='74' alt='Host avatar' />
                  </div>
                  <span className='offer__user-name'>{host.name}</span>
                  <span className='offer__user-status'>{host.status}</span>
                </div>
                <div className='offer__description'>
                  {host.description.map((item, id) => {
                    return (
                      <p key={id} className='offer__text'>
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
              <section className='offer__reviews reviews'>
                <h2 className='reviews__title'>
                  Reviews &middot; <span className='reviews__amount'>1</span>
                </h2>
                <ul className='reviews__list'>
                  <li className='reviews__item'>
                    <div className='reviews__user user'>
                      <div className='reviews__avatar-wrapper user__avatar-wrapper'>
                        <img className='reviews__avatar user__avatar' src='img/avatar-max.jpg' width='54' height='54' alt='Reviews avatar' />
                      </div>
                      <span className='reviews__user-name'>Max</span>
                    </div>
                    <div className='reviews__info'>
                      <div className='reviews__rating rating'>
                        <div className='reviews__stars rating__stars'>
                          <span style={{ width: '80%' }}></span>
                          <span className='visually-hidden'>Rating</span>
                        </div>
                      </div>
                      <p className='reviews__text'>A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.</p>
                      <time className='reviews__time' dateTime='2019-04-24'>
                        April 2019
                      </time>
                    </div>
                  </li>
                </ul>
                <FormReview />
              </section>
            </div>
          </div>
          <section className='offer__map map'></section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              {offers.slice(0, 3).map((offer) => {
                return <Card offerCardType='offerScreen' offer={offer} key={offer.id} />;
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
