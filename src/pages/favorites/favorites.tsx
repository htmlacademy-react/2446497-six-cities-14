import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Card from '../../components/card/card';
import { useAppDispatch, useAppSelector } from '../../hooks/dispatch';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-actions';

export default function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();

  const favoritesOffers = useAppSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const CitiesList = [...new Set(favoritesOffers.map((offer) => offer.city.name))].sort();

  return (
    <div className='page'>
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
