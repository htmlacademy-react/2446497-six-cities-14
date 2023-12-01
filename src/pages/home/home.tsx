import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import PlacesWrap from '../../components/places-wrap/places-wrap';
import Tabs from '../../components/tabs/tabs';
import { OfferItem } from '../../types/offers';
import { useMemo, useState } from 'react';
import { useAppSelector } from '../../hooks/dispatch';
import { cities } from '../../mocks/city';
import { getActiveCity, getOffers } from '../../store/offers-data/selectors';

export default function Home(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const selectedCity = useAppSelector(getActiveCity);
  const [selectedPoint, setSelectedPoint] = useState<OfferItem['id'] | null>(null);
  const offersCity = offers.filter((offer) => offer.city.name === selectedCity);

  const cityMap = useMemo(() => {
    let city = cities.find((cityName) => cityName.name === selectedCity);
    if (city === undefined) {
      city = cities[0];
    }
    return city;
  }, [selectedCity]);

  function handleCardHover(offerId: OfferItem['id'] | null) {
    setSelectedPoint(offerId);
  }

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>6 городов</title>
      </Helmet>
      <main className={`page__main page__main--index ${offersCity.length !== 0 ? '' : 'page__main--index-empty'}`}>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs />
        <div className='cities'>
          <div className={`cities__places-container ${offersCity.length !== 0 ? '' : 'cities__places-container--empty'} container`}>
            {offersCity.length !== 0 ? (
              <PlacesWrap handleCardHover={handleCardHover} />
            ) : (
              <section className='cities__no-places'>
                <div className='cities__status-wrapper tabs__content'>
                  <b className='cities__status'>No places to stay available</b>
                  <p className='cities__status-description'>We could not find any property available at the moment in {selectedCity}</p>
                </div>
              </section>
            )}

            <div className='cities__right-section'> {offersCity.length !== 0 && <Map cityMap={cityMap} offers={offersCity} selectedPoint={selectedPoint} />}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
