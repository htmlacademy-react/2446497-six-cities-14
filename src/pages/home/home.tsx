import { Helmet } from 'react-helmet-async';
import Map from '../../components/map/map';
import PlacesWrap from '../../components/places-wrap/places-wrap';
import Tabs from '../../components/tabs/tabs';
import { Offers } from '../../types/question';

type HomeProps = {
  placesCount: number;
  offers: Offers;
};

export default function Home({ placesCount, offers }: HomeProps): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>6 городов</title>
      </Helmet>
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs />
        <div className='cities'>
          <div className='cities__places-container container'>
            <PlacesWrap placesCount={placesCount} offers={offers} />
            <div className='cities__right-section'>
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
