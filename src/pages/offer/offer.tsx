import { Helmet } from 'react-helmet-async';
import { LocationCity, Offers } from '../../types/offers';
import { useParams } from 'react-router-dom';
import Error from '../404/404';
import FormReview from '../../components/formReview/form-review';
import { Reviews } from '../../types/reviews';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';

type OfferProps = {
  offers: Offers;
  reviews: Reviews;
  city: LocationCity;
  nearby: Offers;
};

export default function Offer({ offers, reviews, city, nearby }: OfferProps): JSX.Element {
  const params = useParams().id;
  let paramsNum: number = 0;

  if (params !== undefined) {
    paramsNum = parseInt(params, 10);
  }
  const offerItem = offers.find((i) => i.id === paramsNum);
  if (offerItem === undefined) {
    return <Error />;
  }

  const host = offerItem.host;

  return (
    <div className='page'>
      <Helmet>
        <title>Ваш вариант</title>
      </Helmet>

      <main className='page__main page__main--offer'>
        <section className='offer'>
          <div className='offer__gallery-container container'>
            <div className='offer__gallery'>
              {offerItem.images.map((img) => (
                <div key={img} className='offer__image-wrapper'>
                  <img className='offer__image' src={`${img}`} alt='Photo studio' />
                </div>
              ))}
            </div>
          </div>
          <div className='offer__container container'>
            <div className='offer__wrapper'>
              {offerItem.isPremium && (
                <div className='offer__mark'>
                  <span>Premium</span>
                </div>
              )}
              <div className='offer__name-wrapper'>
                <h1 className='offer__name'>{offerItem.title}</h1>
                <button className={`offer-card__bookmark-button ${offerItem.isFavorite ? 'offer-card__bookmark-button--active' : ''} button`} type='button'>
                  <svg className='offer__bookmark-icon' style={{ width: '31px', height: '33px' }}>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
              </div>
              <div className='offer__rating rating'>
                <div className='offer__stars rating__stars'>
                  <span style={{ width: `${(offerItem.rating / 5) * 100}%` }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='offer__rating-value rating__value'>{offerItem.rating}</span>
              </div>
              <ul className='offer__features'>
                <li className='offer__feature offer__feature--entire'>{offerItem.type}</li>
                <li className='offer__feature offer__feature--bedrooms'>{offerItem.bedrooms} Bedrooms</li>
                <li className='offer__feature offer__feature--adults'>Max {offerItem.maxAdults} adults</li>
              </ul>
              <div className='offer__price'>
                <b className='offer__price-value'>&euro;{offerItem.price}</b>
                <span className='offer__price-text'>&nbsp;night</span>
              </div>
              <div className='offer__inside'>
                <h2 className='offer__inside-title'>What&apos;s inside</h2>
                <ul className='offer__inside-list'>
                  {offerItem.goods.map((feature) => (
                    <li key={feature} className='offer__inside-item'>
                      {feature}
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
                  <p className='offer__text'>{offerItem.description}</p>
                </div>
              </div>
              <section className='offer__reviews reviews'>
                <h2 className='reviews__title'>
                  Reviews &middot; <span className='reviews__amount'>{reviews.length}</span>
                </h2>
                <ReviewList reviews={reviews} />
                <FormReview />
              </section>
            </div>
          </div>
          <section className='offer__map'>
            <Map offers={nearby} city={city} />
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <OfferList offers={nearby} offerListType='offerScreen' />
          </section>
        </div>
      </main>
    </div>
  );
}
