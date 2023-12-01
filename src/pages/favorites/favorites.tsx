import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Card from '../../components/card/card';
import { useAppSelector } from '../../hooks/dispatch';
import { getFavorites } from '../../store/favorites-data/selectors';
import { Fragment } from 'react';

export default function Favorites(): JSX.Element {
  const favoritesOffers = useAppSelector(getFavorites);
  const CitiesList = [...new Set(favoritesOffers.map((offer) => offer.city.name))].sort();

  return (
    <div className={`page ${favoritesOffers.length === 0 ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <main className={`page__main page__main--favorites ${favoritesOffers.length === 0 ? 'page__main--favorites-empty' : ''}`}>
        <div className='page__favorites-container container'>
          <section className={`favorites ${favoritesOffers.length === 0 ? 'favorites--empty' : ''}`}>
            {favoritesOffers.length === 0 ? (
              <Fragment>
                <h1 className='visually-hidden'>Favorites (empty)</h1>
                <div className='favorites__status-wrapper'>
                  <b className='favorites__status'>Nothing yet saved.</b>
                  <p className='favorites__status-description'>Save properties to narrow down search or plan your future trips.</p>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <h1 className='favorites__title'>Saved listing</h1>
                <ul className='favorites__list'>
                  {CitiesList.map((city) => (
                    <li className='favorites__locations-items' key={city}>
                      <div className='favorites__locations locations locations--current'>
                        <div className='locations__item'>
                          <a className='locations__item-link' href='#'>
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className='favorites__places'>
                        {favoritesOffers
                          .filter((offer) => offer.city.name === city)
                          .map((offer) => (
                            <Card offerCardType='favoritesScreen' offer={offer} key={offer.id} />
                          ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
