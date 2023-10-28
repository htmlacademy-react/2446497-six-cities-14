import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import { Offers } from '../../types/offers';
import Card from '../../components/card/card';

type FavoritesProps = {
  offers: Offers;
};

export default function Favorites({ offers }: FavoritesProps): JSX.Element {
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
              <li className='favorites__locations-items'>
                <div className='favorites__locations locations locations--current'>
                  <div className='locations__item'>
                    <a className='locations__item-link' href='#'>
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className='favorites__places'>
                  {offers.map((offer) => (
                    <Card offerCardType='favoritesScreen' offer={offer} key={offer.id} />
                  ))}
                </div>
              </li>

              <li className='favorites__locations-items'>
                <div className='favorites__locations locations locations--current'>
                  <div className='locations__item'>
                    <a className='locations__item-link' href='#'>
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className='favorites__places'>
                  {offers.map((offer) => (
                    <Card offerCardType='favoritesScreen' offer={offer} key={offer.id} />
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
