import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import PlacesWrap from '../../components/places-wrap/places-wrap';
import Tabs from '../../components/tabs/tabs';
import { LocationCity, OfferItem, Offers } from '../../types/offers';
import { useState } from 'react';

type HomeProps = {
  placesCount: number;
  offers: Offers;
  city: LocationCity;
};

export default function Home({ placesCount, offers, city }: HomeProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<OfferItem['id'] | null>(null);

  function handleCardHover(offerId: OfferItem['id'] | null) {
    setSelectedPoint(offerId);
  }

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>6 городов</title>
      </Helmet>
      <main className={`page__main page__main--index ${placesCount !== null ? '' : 'page__main--index-empty'}`}>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs />
        <div className='cities'>
          <div className={`cities__places-container ${placesCount !== null ? '' : 'cities__places-container--empty'} container`}>
            {placesCount !== null ? (
              <PlacesWrap placesCount={placesCount} offers={offers} handleCardHover={handleCardHover} />
            ) : (
              <section className='cities__no-places'>
                <div className='cities__status-wrapper tabs__content'>
                  <b className='cities__status'>No places to stay available</b>
                  <p className='cities__status-description'>We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
            )}

            <div className='cities__right-section'> {placesCount !== null && <Map offers={offers} selectedPoint={selectedPoint} city={city} />}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
