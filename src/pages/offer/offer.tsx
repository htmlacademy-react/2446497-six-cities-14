import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import FormReview from '../../components/form-review/form-review';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';
import { AuthorizationStatus, LoadingDataStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/dispatch';
import { cities } from '../../mocks/city';
import Error from '../404/404';
import { useEffect, useMemo } from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import { fetchFavoritesAction, fetchNearbyAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import { Offers } from '../../types/offers';
import { getOffer, getOfferLoadingStatus } from '../../store/offer-data/selectors';
import { getNearPlaces } from '../../store/near-places-data/selectors';
import { getReviews } from '../../store/reviews-data/selectors';
import { getActiveCity } from '../../store/offers-data/selectors';
import { getAuthorizationStatus } from '../../store/authorization-data/selectors';
import { dropOffer } from '../../store/offer-data/offer-data';
import FullOffer from '../../components/full-offer/full-offer';
import OfferGallery from '../../components/offer-gallery/offer-gallery';

export default function Offer(): JSX.Element {
  const offerId = useParams().id;
  const offer = useAppSelector(getOffer);
  const nearPlaces = useAppSelector(getNearPlaces);
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getReviews);
  const isOfferLoading = useAppSelector(getOfferLoadingStatus);
  const selectedCity = useAppSelector(getActiveCity);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  let nearby: Offers = [];
  if (offer) {
    nearby = nearPlaces.slice(0, 3).concat(offer);
  }

  const cityMap = useMemo(() => {
    let city = cities.find((cityName) => cityName.name === selectedCity);
    if (city === undefined) {
      city = cities[0];
    }
    return city;
  }, [selectedCity]);

  useEffect(() => {
    dispatch(fetchOfferAction(offerId));
    dispatch(fetchNearbyAction(offerId));
    dispatch(fetchReviewsAction(offerId));
    dispatch(fetchFavoritesAction());
    return () => {
      dispatch(dropOffer());
    };
  }, [dispatch, offerId]);

  if (isOfferLoading === LoadingDataStatus.Pending) {
    return <LoadingScreen />;
  }

  if (!offer) {
    return <Error />;
  }

  return (
    <div className='page'>
      <Helmet>
        <title>Ваш вариант</title>
      </Helmet>
      <main className='page__main page__main--offer'>
        <section className='offer'>
          <div className='offer__gallery-container container'>
            <OfferGallery offer={offer} />
          </div>
          <div className='offer__container container'>
            <div className='offer__wrapper'>
              <FullOffer offer={offer} />
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
            <Map offers={nearby} cityMap={cityMap} selectedPoint={offer.id} />
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
