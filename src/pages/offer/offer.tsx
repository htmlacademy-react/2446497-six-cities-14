import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import FormReview from '../../components/formReview/form-review';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';
import { addEnding, capitalize, starsLength } from '../../utils/common';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/dispatch';
import { cities } from '../../mocks/city';
import Error from '../404/404';
import { useEffect } from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import { fetchNearbyAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import { Offers } from '../../types/offers';
import { getOffer, getOfferLoadingStatus } from '../../store/offer-data/selectors';
import { getNearPlaces } from '../../store/near-places-data/selectors';
import { getReviews } from '../../store/reviews-data/selectors';
import { getActiveCity } from '../../store/offers-data/selectors';
import { getAuthorizationStatus } from '../../store/authorization-data/selectors';
import { dropOffer } from '../../store/offer-data/offer-data';

export default function Offer(): JSX.Element {
  const offerId = useParams().id;
  const offer = useAppSelector(getOffer);
  const nearPlaces = useAppSelector(getNearPlaces);

  let nearby: Offers = [];
  if (offer) {
    nearby = nearPlaces.slice(0, 3).concat(offer);
  }

  const reviews = useAppSelector(getReviews);
  const isOfferLoading = useAppSelector(getOfferLoadingStatus);
  const selectedCity = useAppSelector(getActiveCity);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  let cityMap = cities.find((city) => city.name === selectedCity);
  if (cityMap === undefined) {
    cityMap = cities[0];
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(offerId));
    dispatch(fetchNearbyAction(offerId));
    dispatch(fetchReviewsAction(offerId));
    return () => {
      dispatch(dropOffer());
    };
  }, [dispatch, offerId]);

  if (isOfferLoading) {
    return <LoadingScreen />;
  }

  if (!offer) {
    return <Error />;
  }

  const selectedPoint = offer.id;
  const host = offer.host;

  return (
    <div className='page'>
      <Helmet>
        <title>Ваш вариант</title>
      </Helmet>

      <main className='page__main page__main--offer'>
        <section className='offer'>
          <div className='offer__gallery-container container'>
            <div className='offer__gallery'>
              {offer.images.slice(0, 6).map((img: string) => (
                <div key={img} className='offer__image-wrapper'>
                  <img className='offer__image' src={`${img}`} alt='Photo studio' />
                </div>
              ))}
            </div>
          </div>
          <div className='offer__container container'>
            <div className='offer__wrapper'>
              {offer.isPremium && (
                <div className='offer__mark'>
                  <span>Premium</span>
                </div>
              )}
              <div className='offer__name-wrapper'>
                <h1 className='offer__name'>{capitalize(offer.title)}</h1>
                <button className={`offer-card__bookmark-button ${offer.isFavorite ? 'offer-card__bookmark-button--active' : ''} button`} type='button'>
                  <svg className='offer__bookmark-icon' style={{ width: '31px', height: '33px' }}>
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>To bookmarks</span>
                </button>
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
              <section className='offer__reviews reviews'>
                <h2 className='reviews__title'>
                  Reviews &middot; <span className='reviews__amount'>{reviews.length}</span>
                </h2>
                <ReviewList reviews={reviews} />
                {authorizationStatus === AuthorizationStatus.Auth && <FormReview offerId={offerId} />}
              </section>
            </div>
          </div>
          <section className='offer__map'>
            <Map offers={nearby} cityMap={cityMap} selectedPoint={selectedPoint} />
          </section>
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <OfferList offers={nearPlaces} offerListType='offerScreen' />
          </section>
        </div>
      </main>
    </div>
  );
}
