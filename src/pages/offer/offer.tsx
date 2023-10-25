import { Helmet } from 'react-helmet-async';
import { Offers } from '../../types/question';
import { useParams } from 'react-router-dom';
import Error from '../404/404';
import { useEffect, useState } from 'react';

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
  console.log(host);

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
                <form className='reviews__form form' action='#' method='post'>
                  <label className='reviews__label form__label' htmlFor='review'>
                    Your review
                  </label>
                  <div className='reviews__rating-form form__rating'>
                    <input className='form__rating-input visually-hidden' name='rating' value='5' id='5-stars' type='radio' />
                    <label htmlFor='5-stars' className='reviews__rating-label form__rating-label' title='perfect'>
                      <svg className='form__star-image' width='37' height='33'>
                        <use xlinkHref='#icon-star'></use>
                      </svg>
                    </label>

                    <input className='form__rating-input visually-hidden' name='rating' value='4' id='4-stars' type='radio' />
                    <label htmlFor='4-stars' className='reviews__rating-label form__rating-label' title='good'>
                      <svg className='form__star-image' width='37' height='33'>
                        <use xlinkHref='#icon-star'></use>
                      </svg>
                    </label>

                    <input className='form__rating-input visually-hidden' name='rating' value='3' id='3-stars' type='radio' />
                    <label htmlFor='3-stars' className='reviews__rating-label form__rating-label' title='not bad'>
                      <svg className='form__star-image' width='37' height='33'>
                        <use xlinkHref='#icon-star'></use>
                      </svg>
                    </label>

                    <input className='form__rating-input visually-hidden' name='rating' value='2' id='2-stars' type='radio' />
                    <label htmlFor='2-stars' className='reviews__rating-label form__rating-label' title='badly'>
                      <svg className='form__star-image' width='37' height='33'>
                        <use xlinkHref='#icon-star'></use>
                      </svg>
                    </label>

                    <input className='form__rating-input visually-hidden' name='rating' value='1' id='1-star' type='radio' />
                    <label htmlFor='1-star' className='reviews__rating-label form__rating-label' title='terribly'>
                      <svg className='form__star-image' width='37' height='33'>
                        <use xlinkHref='#icon-star'></use>
                      </svg>
                    </label>
                  </div>
                  <textarea className='reviews__textarea form__textarea' id='review' name='review' placeholder='Tell how was your stay, what you like and what can be improved'></textarea>
                  <div className='reviews__button-wrapper'>
                    <p className='reviews__help'>
                      To submit review please make sure to set <span className='reviews__star'>rating</span> and describe your stay with at least <b className='reviews__text-amount'>50 characters</b>.
                    </p>
                    <button className='reviews__submit form__submit button' type='submit' disabled>
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className='offer__map map'></section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              <article className='near-places__card place-card'>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <a href='#'>
                    <img className='place-card__image' src='img/room.jpg' width='260' height='200' alt='Place image' />
                  </a>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>&euro;80</b>
                      <span className='place-card__price-text'>&#47;&nbsp;night</span>
                    </div>
                    <button className='place-card__bookmark-button place-card__bookmark-button--active button' type='button'>
                      <svg className='place-card__bookmark-icon' width='18' height='19'>
                        <use xlinkHref='#icon-bookmark'></use>
                      </svg>
                      <span className='visually-hidden'>In bookmarks</span>
                    </button>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{ width: '80%' }}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <a href='#'>Wood and stone place</a>
                  </h2>
                  <p className='place-card__type'>Room</p>
                </div>
              </article>

              <article className='near-places__card place-card'>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <a href='#'>
                    <img className='place-card__image' src='img/apartment-02.jpg' width='260' height='200' alt='Place image' />
                  </a>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>&euro;132</b>
                      <span className='place-card__price-text'>&#47;&nbsp;night</span>
                    </div>
                    <button className='place-card__bookmark-button button' type='button'>
                      <svg className='place-card__bookmark-icon' width='18' height='19'>
                        <use xlinkHref='#icon-bookmark'></use>
                      </svg>
                      <span className='visually-hidden'>To bookmarks</span>
                    </button>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{ width: '80%' }}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <a href='#'>Canal View Prinsengracht</a>
                  </h2>
                  <p className='place-card__type'>Apartment</p>
                </div>
              </article>

              <article className='near-places__card place-card'>
                <div className='place-card__mark'>
                  <span>Premium</span>
                </div>
                <div className='near-places__image-wrapper place-card__image-wrapper'>
                  <a href='#'>
                    <img className='place-card__image' src='img/apartment-03.jpg' width='260' height='200' alt='Place image' />
                  </a>
                </div>
                <div className='place-card__info'>
                  <div className='place-card__price-wrapper'>
                    <div className='place-card__price'>
                      <b className='place-card__price-value'>&euro;180</b>
                      <span className='place-card__price-text'>&#47;&nbsp;night</span>
                    </div>
                    <button className='place-card__bookmark-button button' type='button'>
                      <svg className='place-card__bookmark-icon' width='18' height='19'>
                        <use xlinkHref='#icon-bookmark'></use>
                      </svg>
                      <span className='visually-hidden'>To bookmarks</span>
                    </button>
                  </div>
                  <div className='place-card__rating rating'>
                    <div className='place-card__stars rating__stars'>
                      <span style={{ width: '100%' }}></span>
                      <span className='visually-hidden'>Rating</span>
                    </div>
                  </div>
                  <h2 className='place-card__name'>
                    <a href='#'>Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className='place-card__type'>Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
